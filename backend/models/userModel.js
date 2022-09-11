const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
});


const userModel=mongoose.model("User",userSchema);


module.exports=userModel;