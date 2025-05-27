const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    type:{type:String,required:true},
    createdAt:{type:String,default:Date.now},
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
})
module.exports = mongoose.model('Contact',contactSchema)