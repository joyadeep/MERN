const User=require('../models/User');
const bcrypt=require('bcryptjs');

const getUsers=async(req,res,next)=>{
    try {
        const result=await User.find();

        if (!result){
            return res.status(500).json({message:"Cannot find user"})
        }
        res.status(200).json({message:"User found",data:result})
    } catch (error) {
        console.log(error)
    }
}

const addUser=async(req,res,next)=>{
    try {
        const {name,email,password}=req.body
        if (!name || name.trim()==="" || !email || email.trim()==="" || password.length<6)
        return res.status(422).json({message:"invalid data"})
        const existingUser=await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message:"User Already exist"})
        }
        const hashedPassword=bcrypt.hashSync(password)
        const user=new User({name,email,password:hashedPassword})
        await user.save();
        if(!user){
            return res.status(500).json({message:"unexpected server error"})
        }
        res.status(201).json({message:"User Created Successfuly",data:user})

    } catch (error) {
        console.log(error)
    }
}

const login=async(req,res,next)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const checkPassword=await bcrypt.compare(password,user.password)
    if(!checkPassword){
        return res.status(404).json({message:"Invalid email or password"})
    }
    res.status(200).json({message:"Logged in successfully",data:user})
}

exports.getUsers=getUsers;
exports.addUser=addUser;
exports.login=login;