const express=require('express')
const commentController=require('../Controller/comment')
const userauth=require('../Middleware/userAuth')
const commentRoute=express.Router()
commentRoute.post('/comment/:postid',userauth,commentController.comments)
commentRoute.get('/commentdelete/:postid/:commentid',userauth,commentController.commentdeletebyid)
commentRoute.get('/commentupdate/:postid/:commentid',userauth,commentController.commentupdatebyid)
module.exports=commentRoute