const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Firstname:{
        type:String,
        
    },
    Lastname:{
        type:String,
        default:"-"
        
    },
    mobileNo:{
        type:String,
    }
})
const Usermodel=mongoose.model('userinfos',userschema)
module.exports=Usermodel