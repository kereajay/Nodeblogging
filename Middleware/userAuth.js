var jwt = require('jsonwebtoken');
const Usermodel = require('../Model/user');
const userauth=(req,res,next)=>{
try{
    const bearertoken=req.headers.authorization
    if(!bearertoken){
        return res.json({success:false,message:"there is no token"})
    }

    const token=bearertoken.split(" ")[1];
    jwt.verify(token,"blogging")

    const tokendata=jwt.decode(token)
    const currnttimeinsec=Math.floor(new Date().getTime()/1000)
    if(currnttimeinsec>tokendata.exp){
        return res.json({success:false,message:"token not matching"})

    }
    const isuser=Usermodel.findById(tokendata.userId)
    if(!isuser){
        return res.json({success:false,message:"no user with respect to this"})
    }

next()
}
catch(err){
    return res.json({success:false,message:"message from err",err:err})
}

}
module.exports=userauth