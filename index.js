const express=require('express')
const userRoute=require('./Routes/user')
const postRoute=require('./Routes/post')
const commentRoute=require('./Routes/comment')
const { mongo, default: mongoose } = require('mongoose')
var cors = require('cors')
const dotenv=require('dotenv')
dotenv.config();
const app=express()
mongoose.connect(process.env.DATABASEURI).then(()=>console.log("data base connected successfully")).catch((err)=>console.log(err))
app.use(cors())
app.use(express.json())
app.use('/blog/v1/user',userRoute)
app.use('/blog/v1/post',postRoute)
app.use('/blog/v1/comment',commentRoute)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})


app.listen(7259,console.log("server is on 7259"))
