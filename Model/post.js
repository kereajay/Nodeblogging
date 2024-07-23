const mongoose=require('mongoose')
// const commentSchema = new mongoose.Schema({
//     commentId: { type: String, required: true, unique: true },
//     comment: String,
//     userId: mongoose.Schema.Types.ObjectId
//   });
const postschema=new mongoose.Schema({
   postedBy:{
     type:String,
   },
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    comment:{
        type:Array,
    }
  

},{
    timestamps:true
})
const postmodel=mongoose.model("posts",postschema)
module.exports=postmodel