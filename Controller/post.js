const postmodel=require('../Model/post')
const { findById } = require('../Model/user')
const { post } = require('../Routes/user')
const { v4: uuidv4 } = require('uuid');
var jwt = require('jsonwebtoken');


//creating the post's api
const createpost=async(req,res)=>{
    const btoken=req.headers.authorization
    const token=btoken.split(" ")[1]
    console.log(token)
    const tokendata=jwt.decode(token)
    console.log(tokendata)
    // const commentid=uuidv4()
    await postmodel.create({...req.body,
        postedBy:tokendata.userId
    })
    const posts=await postmodel.findOne({title:req.body.title})
    // console.log(posts)
    res.json({success:true,message:"post created successfully",postId:posts._id})


}

//get all post at once
const getallpost=async(req,res)=>{
    const allposts= await postmodel.find()
    res.json({success:true,message:"post sended successfully",allposts:allposts})
}

//get post by ID
const getpostbyId=async(req,res)=>{
    console.log(req.params.postid)
    // const response=postmodel.findById()
    const postbyid=await postmodel.findById(req.params.postid)
    res.json({success:true,messagep:"successfully got post by id",id:req.params.postid,post:postbyid})

}

//update a post by specific id
const updatebyid=async(req,res)=>{
   await postmodel.findByIdAndUpdate(req.params.postid,req.body)
   const updatedpost=await postmodel.findById(req.params.postid)
    res.json({success:true,message:"post updated successfulyy",updatedpost:updatedpost})

}

//delete post by id
const deletebyid=async(req,res)=>{
    // console.log(req.params.postid)
    // const response=postmodel.findById()
   await postmodel.deleteOne({_id:req.params.postid})
    res.json({success:true,messagep:"post deleted successfully"})

}
    
const postController={
    getallpost,
    createpost,
    getpostbyId,
    updatebyid,
    deletebyid,
}
module.exports=postController