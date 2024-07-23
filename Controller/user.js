const Usermodel=require('../Model/user')
var jwt = require('jsonwebtoken');
// const Usermodel=require('../Model/user')
const signup=(req,res)=>{
    Usermodel.create(req.body)
    res.json({success:true,mesage:"signup successfull",info:req.body})
}
const signin=async(req,res)=>{
    const {email,password}=req.body
    const user=await Usermodel.findOne({email:email})

    const currentimeinsec=Math.floor(new Date().getTime()/1000)
    const expirytime=currentimeinsec+3600;

    const jwtpayload={
        userId:user._id,
        email:user.email,
        exp:expirytime
    }
    const token=jwt.sign(jwtpayload,"blogging")

    await Usermodel.findByIdAndUpdate(user._id,{$set:{token:token}})
  
     


   
    if(!user){
        return res.json({success:false,message:"you are not a user please login"})
    }
    if(user.password!=password){
        return res.json({success:false,message:"your password is incorrect",token:token})

    }
    res.json({success:true,message:"sign in successfull",token:token})

}
const userController={
    signup,
    signin,
}
module.exports=userController