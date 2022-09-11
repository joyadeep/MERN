const mongoose=require("mongoose");

const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postImage:{
        type:String
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const postModel=mongoose.model("Post",postSchema);

module.exports=postModel;