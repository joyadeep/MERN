import bcrypt  from 'bcryptjs'
import User from '../model/UserModel.js';
import jwt from 'jsonwebtoken'

const ACCESSTOKENSECRET="my access token secret key"

const registerController=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const salt=await bcrypt.genSalt(10);
        const hashedPW=await bcrypt.hashSync(password,salt);
        const user=new User({username,email,password:hashedPW});
        const result=await user.save();
        if(!result){
            return res.status(400).json({success:false,message:'cannot register user'})
        }
        res.status(201).json({success:true,message:'user created successfully',data:result})
    } catch (error) {
        console.log(error)
    }
}

const loginController=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({success:false,message:"invalid username or password"})
        }
        const comparePW=await bcrypt.compare(password,user.password)
        if(!comparePW){
            return res.status(401).json({success:false,message:"password not matched"})
        }
        const accessToken=await jwt.sign({id:user._id,isAdmin:user.isAdmin},ACCESSTOKENSECRET,{
            expiresIn:'5d'
        })
        res.status(200).json({success:true,message:'logged in successfully',data:{user,accessToken}})
    } catch (error) {
        res.status(500).json({success:false,message:"error in login controller"})
        
    }
}

export {registerController,loginController};