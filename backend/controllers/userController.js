const bcrypt=require('bcryptjs');
const User=require("../models/userModel")


const getallusers=async(req,res,next)=>{
    try {
        const result=await User.find();

        if(!result){
            return res.status(404).json({message:"Cannot retrieve user "})
        }
        res.status(200).json({message:"User retrieved successfully",data:result})
    } catch (error) {
        console.log(error)        
    }
}

const getUser=async(req,res,next)=>{
    try {
        const result=await User.findById(req.params.id);
        if(!result){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json({message:"user found",data:result});
    } catch (error) {
        console.log(error);
    }
}

const login=async(req,res,next)=>{
    const {email,password}=req.body;
    const result=await User.findOne({email});

    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    const pwMatch=await bcrypt.compare(password,result.password);
    if(!pwMatch)
    {
        return res.status(404).json({message:"Invalid Username or password"})
    }

    res.status(200).json({message:"user found",data:result})
}

const signup=async(req,res,next)=>{
    const {email,password,username}=req.body;
    const hashedPassword=bcrypt.hashSync(password);
    try {
        const user=new User({
            username,
            email,
            password:hashedPassword
        })
        const result=await user.save();

        if(!result){
            return res.status(500).json({message:"Cannot Save user"})
        }
        res.status(201).json({message:"User Added successfully",data:result});
    } catch (error) {
        console.log(error)
    }
}

const deleteUser=async(req,res,next)=>{
    try {
        const result=await User.findByIdAndRemove(req.params.id)
        if(!result){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"user deleted successfully"})
    } catch (error) {
        
    }
}

exports.getallusers=getallusers;
exports.login=login;
exports.signup=signup;
exports.deleteUser=deleteUser;
exports.getUser=getUser;