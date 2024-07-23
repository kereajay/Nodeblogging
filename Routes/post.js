const express=require('express')
const userAuth=require('../Middleware/userAuth')
const postController=require('../Controller/post')

const postRoute=express.Router()
postRoute.get('/getallpost',userAuth,postController.getallpost)
postRoute.post('/createpost',userAuth,postController.createpost)
postRoute.get('/:postid',userAuth,postController.getpostbyId)
postRoute.put('/update/:postid',userAuth,postController.updatebyid)
postRoute.delete('/delete/:postid',userAuth,postController.deletebyid)

module.exports=postRoute