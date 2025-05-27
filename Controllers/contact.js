const Contact = require('../Models/Contact')

//get all contact
const getAllContacts = async(req,res)=>{
    const getContacts = await Contact.find();
    if(!getContacts)return res.json({message:"contact not exists ",success:false})
    res.json({message:"All Contact Fetched ",data:getContacts,success:true});
}

//get contact by id 
const getContactById = async(req,res)=>{
    const id = req.params.id;
    const getContacts = await Contact.findById(id)
    
     if(!getContacts){ return  res.json({message:"contact not exists ",success:false})}
    res.json({message:`${getContacts.name} Contact Fetched `,data:getContacts,success:true});
}
//update contact

const updateContact = async(req,res)=>{
    const id = req.params.id;
    const {name,phone,type,email}= req.body
    const userContact = await Contact.findByIdAndUpdate(id,{name,phone,type,email},{new:true});
    res.json({message:"Contact Has Been Updated",data:userContact,success:true})

}
//delete contact
const deleteContact = async(req,res)=>{
    const id = req.params.id;
    const userContacts = await Contact.findByIdAndDelete(id);
     if(!userContacts) return res.json({message:"contact not exists ",success:false})
    res.json({message:"contact has been deleted",success:true});
}
//create new contact
 const newContact = async(req,res)=>{
    const {name,email,phone,type} = req.body;
    if(name == "" || email == "" || phone == "" || type == ""){
        return res.json({message:"required field is empty",success:false})

    } 
    const newContact = await Contact.create({name,email,phone,type,user:req.user})
    res.status(201).json({message:"contact created succesfully ",data:newContact,success:true})
 }


 //get contact by user id 
const getContactByUserId = async(req,res)=>{
    const id = req.params.id;
    const getContacts = await Contact.find({user:id})
    
     if(!getContacts){ return  res.status(204).json({message:"contact not exists ",success:false})}
    res.json({message:`User specific Contact Fetched `,data:getContacts,success:true});
}

module.exports = {newContact,getAllContacts,getContactById ,deleteContact,updateContact,getContactByUserId};