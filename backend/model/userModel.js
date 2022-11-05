const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    photoURL:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
});

const User=mongoose.model('USER',userSchema);

module.exports=User;