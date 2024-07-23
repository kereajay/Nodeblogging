const postmodel=require('../Model/post')
const Usermodel=require('../Model/user')
const { v4: uuidv4 } = require('uuid');
var jwt = require('jsonwebtoken');

const comments=async(req,res)=>{
    console.log(req.body)
    const token=req.headers.authorization.split(" ")[1]
    const tokendata=jwt.decode(token)
    const postbyid=await postmodel.findByIdAndUpdate(req.params.postid,{$push:{comment:{commentid:uuidv4(),comment:req.body.comment,commentedby:tokendata.userId}}})



    
    res.json({success:true,message:"comment added  successfully",post:postbyid})
}
const commentdeletebyid=async(req,res)=>{
    const postbyid=await postmodel.findById(req.params.postid)
    const filteredcomment=postbyid.comment.filter((comment)=>{
        return comment.commentid!=req.params.commentid
    })
    await postmodel.findByIdAndUpdate(req.params.postid,{$set:{comment:filteredcomment}})
    res.json({success:true,post:filteredcomment})
}
const commentupdatebyid=async(req,res)=>{
    const postbyid=await postmodel.findById(req.params.postid)
    const updatedcommnet=postbyid.comment.map((comm)=>{
        if(comm.commentid==req.params.commentid){
            comm.comment=req.body.updatedcommnet
            return comm
        }
    })
    await postmodel.findByIdAndUpdate(req.params.postid,{$set:{comment:updatedcommnet}})
    res.json({success:true,post:updatedcommnet})

}
const commentController={
    comments,
    commentdeletebyid,
    commentupdatebyid
}
module.exports=commentController