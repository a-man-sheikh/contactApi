const jwt = require("jsonwebtoken")
const User = require("../Models/User")
const isAthenticated = async(req,res,next) =>{
    const token = req.header('Auth')
   if(!token) return res.json({message:"Login First"})
    const decoded = jwt.verify(token,process.env.JWT)
    const id =  decoded.userId;
    let user = await User.findById(id)
    if(!user) return res.json({message:"User not found",success:false})
        req.user = user;
    next();

}


module.exports = isAthenticated