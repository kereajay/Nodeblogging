const express=require('express')

const userController=require('../Controller/user')
const userRoute=express.Router()
userRoute.post('/signup',userController.signup)
userRoute.post('/signin',userController.signin)
module.exports=userRoute