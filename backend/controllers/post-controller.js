const { default: mongoose } = require('mongoose');
const Post=require('../models/Post');
const User=require('../models/User');

const getPosts=async(req,res)=>{
try {
    const posts=await Post.find().populate("user");
    if(!posts){
        return res.status(500).json({message:"Cannot fetch posts"})
    }
    res.status(200).json({message:"Posts fetched successfully",data:posts})    
} catch (error) {
    console.log(error)
}
}


const addPost=async(req,res)=>{
   try {
    const{title,description,image,location,date,user}=req.body;
    if(!title || title.trim()==="" || !description){
        return res.status(422).json({message:"Invalid data"})
    }

    const existingUser=await User.findById(user)
    if(!existingUser){
        return res.status(404).json({message:"User not found"})
    }
    const newDate=new Date(date).toLocaleDateString();
    console.log(newDate)
    const post=new Post({title,description,image,location,user,date});
    const session=await mongoose.startSession();
    session.startTransaction();
    existingUser.posts.push(post);
    await existingUser.save({session})
    const result=await post.save();
    session.commitTransaction();

   
    if(!result){
        return res.status(500).json({message:"Cannot save post"})
    }
    res.status(201).json({message:"post saved successfully",data:result});
   } catch (error) {
    console.log(error)
   }
}

const getPostById=async(req,res)=>{
    try {
        const result=await Post.findById(req.params.id)
        if(!result){
            return res.status(404).json({message:'post by this id not found'})
        }
        res.status(200).json({message:'post fetched',data:result})
    } catch (error) {
        console.log(error)        
    }
}

const updatePost=async(req,res)=>{
    try {
        const {title,description,location,image}=req.body;
        if(!title || !description || !location || !image){
            return res.status(422).json({message:"Invalid data : some fields missing"})
        }
        const result=await Post.findByIdAndUpdate(req.params.id,{title,description,location,image},{new:true})
        if(!result){
            return res.status(500).json({message:"Server error"})
        }
        res.status(200).json({message:"Post updated successfully",data:result})
    } catch (error) {
        console.log(error);
    }
}

const deletepost=async(req,res)=>{
    try {
        const id=req.params.id
        const session=await mongoose.startSession();
        session.startTransaction();
        const post=await Post.findById(id).populate("user");
        post.user.posts.pull(post);
        await post.user.save({session})
        const result=await Post.findByIdAndDelete(id);
        session.commitTransaction();
        if(!result){
            return res.status(500).json({message:"Cannot delete post"});
        }
        res.status(200).json({message:"Post deleted successfully"})
    } catch (error) {
        console.log(error);
    }
}

exports.getPosts=getPosts;
exports.addPost=addPost;
exports.getPostById=getPostById;
exports.updatePost=updatePost;
exports.deletepost=deletepost;