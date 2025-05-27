const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
 

const register =  async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body)
  if (name == "" || email == "" || password == "") {
    return res.json({ message: "all field required" });
  }
  let user = await User.findOne({ email });

  if (user)  return res.json({ message: "User Already Registered !" });

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashPassword });

  res.json({
    message: "Register succefully - user has been created",
    data: newUser,
  });
}

const login = async (req,res) =>{
    const {email,password} = req.body;
      if ( email == "" || password == "") {
    return res.json({ message: "all field required" });
  }
    const user = await User.findOne({email});
    if(!user){
        res.json({message:"user is not exited ! please sign up",success:false})

    }
    const validpass = await bcrypt.compare(password,user.password)
    console.log(password)
    console.log(user.password)
    if(!validpass){
        res.status(400).json({message:"Invalid password or email Id",success:false})
    }
    const token = jwt.sign({userId:user._id},process.env.JWT,{expiresIn:'1d'})
    res.json({message:`Welcome ${user.name}`,token,success:true})


  
    
   
}


module.exports = {register ,login};