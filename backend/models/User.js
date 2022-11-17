const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    posts: [{type:mongoose.Types.ObjectId,ref:"Post"}]
});

const User=mongoose.model('User',userSchema);

module.exports=User;