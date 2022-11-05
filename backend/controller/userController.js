
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')
const User=require('../model/userModel')
const SECRET_KEY="HedmvmeejrQdre$ededfro"


const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(422).josn({success:false,message:'Incomplete data'})
        }
    const user=await User.findOne({email:email});
    if(!user){
        return res.status(404).json({success:false,message:'User not registered'})
    }
    const valid_user=await bcrypt.compare(password,user.password)
    if(!valid_user){
        return res.status(400).json({success:false,message:'Email or password is invalid'})
    }
    const {_id}=user
    const token=await jwt.sign({id:_id},SECRET_KEY,{expiresIn:'35s'})
    res.cookie(_id,token,{
        path:'/',
        expires:new Date(Date.now()+1000*25),
        httpOnly:true,
        sameSite:'lax'
    })
    res.status(200).json({success:true,message:'Logged in successfully',data:{id:_id,token}})
    } catch (error) {
       return res.status(500).json({success:false,message:'Something went wrong'}) 
    }
}


const register=async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(422).json({success:false,message:'Incomplete data'})
    }
    const salt=await bcrypt.genSalt(10)
    const hashedPW=await bcrypt.hashSync(password,salt)
    const user=new User({name,email,password:hashedPW})
    const result=await user.save();
    if(!result){
        return res.status(400).json({success:false,message:'Cannot complete registration'})
    }
    const {_id}=result;
    const token=jwt.sign({id:_id},SECRET_KEY,{expiresIn:'1h'})
    console.log("token : ",token)
    res.status(201).json({success:true,message:'User created successfully',data:{id:_id,name,email,token,hashedPW}})
}

const getAllUser=async(req,res)=>{
    const result=await User.find();
    if(!result){
        return res.status(500).json({succes:false,message:'Cannot retrive users '})
    }
    res.status(200).json({success:true,message:'User retrived successfully',data:result})
}


// get single user
const getUser=async(req,res)=>{
    try {
        const result=await User.findById(req.id).select("-password")
        if(!result){
            return res.status(404).json({success:false,message:'cannot find user'})
        }
        res.status(200).json({success:true,message:'user found',data:result})
    } catch (error) {
        
    } 
}

const verifyToken=async(req,res,next)=>{
  try {
    const cookies=req.headers.cookie;
    console.log("token in cookie :",cookies)
    const token=cookies?.split("=")[1]
    if(!token){
        return res.status(400).json({success:false,message:'no token found'})
    }
    jwt.verify(token,SECRET_KEY,(error,user)=>{
        if(error){
            return res.status(400).json({success:false,message:'not verified'})
        }
        else{
            req.id=user.id;
            next();
        }
    })
  } catch (error) {
    res.status(500).json({success:false,message:'something wrong in verifyToken function'})
  }
}

const refreshToken=async(req,res,next)=>{
    try {
    const cookies=req.headers.cookie;
    console.log("refresh cookie :",cookies)
    const prevToken=cookies?.split("=")[1]
    console.log("prev token",prevToken);
    if(!prevToken){
        console.log("not token found")
        return res.status(404).json({success:false,message:'cannot find token'})
    }
    console.log("token found : precessing other")
    jwt.verify(prevToken,SECRET_KEY,(error,user)=>{
        if(error){
            console.log("cannot verify token")
            return res.status(403).json({success:false,message:'token not authorized'})
        }
        console.log("processing after verifying")
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token=jwt.sign({id:user.id},SECRET_KEY,{
            expiresIn:'35s'
        })
        console.log('token',token);

        res.cookie(user.id,token,{
            path:'/',
            expires:new Date(Date.now()+1000*25),
            httpOnly:true,
            sameSite:'lax'
        })

        req.id=user.id;
        console.log("refresh :",res.cookie)
        next();
    })

    } catch (error) {
        res.status(500).json({success:false,message:'problem in server'})
    }
}

exports.login=login;
exports.register=register;
exports.getAllUser=getAllUser;
exports.getUser=getUser;
exports.verifyToken=verifyToken;
exports.refreshToken=refreshToken;