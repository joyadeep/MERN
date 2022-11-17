const User=require('../models/User');
const Token=require('../models/Token');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const jwtDecode=require('jwt-decode')

const getUsers=async(req,res,next)=>{
    try {
        const result=await User.find();

        if (!result){
            return res.status(500).json({success:false,message:"Cannot find user"})
        }
        res.status(200).json({success:true,message:"User found",data:result})
    } catch (error) {
        console.log(error)
    }
}

const addUser=async(req,res,next)=>{
    try {
        const {name,email,password,isAdmin}=req.body
        if (!name || name.trim()==="" || !email || email.trim()==="" || password.length<6)
        return res.status(422).json({message:"invalid data"})
        const existingUser=await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message:"User Already exist"})
        }
        const hashedPassword=bcrypt.hashSync(password)
        const user=new User({name,email,password:hashedPassword,isAdmin})
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
        return res.status(404).json({success:false,message:"User not found"})
    }
    const checkPassword=await bcrypt.compare(password,user.password)
    if(!checkPassword){
        return res.status(404).json({success:false,message:"Invalid email or password"})
    }
    const accessToken=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10s'})
    const refreshToken=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'30s'})
    res.cookie("accessToken",accessToken,{
        expiresIn:1000*60*60*5
    });
    res.cookie("refreshToken",refreshToken,{
        expiresIn:1000*60*60*60
    });
    
    // addToken(refreshToken);
    res.status(200).json({success:true,message:"Logged in successfully",data:user,accessToken:accessToken,refreshToken})
}

const deleteUser=async(req,res)=>{
    try {
        const {id}=req.params;
        // console.log("user id ",id)
        const result=await User.findByIdAndDelete(id);
        if(!result){
            return res.status(400).json({success:false,message:'cannot delete user'})
        }
        res.status(200).json({success:true,message:'user deleted successfully'})
    } catch (error) {
        return res.status(500).josn({success:false,message:'cannot delete User'})
    }
}

//middleware

const verifyUser=async(req,res,next)=>{
    try {
        console.log("reached  to verify 7user")
        const access=req.cookies['accessToken'];
        if(!access){
            console.log("no token found")
        }
        const verify=jwt.verify(access,process.env.ACCESS_TOKEN_SECRET);
        if(!verify){
            //refresh token
            console.log("access token expired")
            const refresh=req.cookies['refreshToken'];
            const verifyRefresh=jwt.verify(refresh,process.env.REFRESH_TOKEN_SECRET);
            if(!verifyRefresh){
                console.log("refresh token also expired")
            }
            const userdetail=jwtDecode(access);
            console.log("user DEtails :",userdetail);
            // const newAccess=jwt.sign()
        }
        console.log("Access token  : ",access)
        
        // next();
    } catch (error) {
        return res.status(500).json({success:false,message:'cannot verify user'})
    }
}

const refreshToken=async(req,res)=>{
    try {
        const headers=req.params.token;
        console.log(headers)
        if(!headers){
            return res.status(403).json({success:false,message:'no token found'});
        }
        // const refresh=headers.split(" ")[1];
        const verifyToken=jwt.verify(headers,process.env.REFRESH_TOKEN_SECRET);
        // console.log("verify token ",Boolean(verifyToken))
        if(!verifyToken){
            return res.status(400).json({success:false,message:'unauthorized user'})
        }
        const {id,isAdmin}=verifyToken;
        const newAccess=jwt.sign({id,isAdmin},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
        const newRefresh=jwt.sign({id,isAdmin},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'})
        res.status(201).json({success:true,message:'tokens generated successfully',data:{accessToken:newAccess,refreshToken:newRefresh}})
    } catch (error) {
        res.status(500).json({success:false,message:'error in refreshToken'})
    }
}



const addToken=async(token)=>{
    try {
        if(!token){
            console.log("token :",token)
            // return res.status(401).json({success:false,message:'no token provided'})
        }
        const token=new Token({token});
        const result=await token.save();
        if(!result){
            // return res.status(400).json({success:false,message:'cannot save token'})
        }
        // res.status(201).json({success:true,message:'token saved successfully',data:result})
    } catch (error) {
    //   res.status(500).json({success:false,message:'cannot add token'})  
    console.log("cannot add token")
    }
}

exports.getUsers=getUsers;
exports.addUser=addUser;
exports.login=login;
exports.deleteUser=deleteUser;
exports.verifyUser=verifyUser;
exports.refreshToken=refreshToken;
