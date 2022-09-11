const Post=require('../models/postModel');

const getPosts=async(req,res,next)=>{
    try {
        const result=await Post.find();
        if(!result){
            return res.status(404).json({message:"Post is empty"})
        }
        res.status(200).json({message:"Post fetched successfully",data:result});
    } catch (error) {
        console.log(error);
    }
}

// add new post

const addPost=async(req,res,next)=>{
    try {
        const {title,description}=req.body;
        const post=new Post({
            title,
            description
        });
        const result=await post.save();
        if(!result){
            return res.status(400).josn({message:"Cannnot post a blog"})
        }
        res.status(201).json({message:"Blog Posted successfully",data:result})


    } catch (error) {
        console.log(error)
    }
}


exports.getPosts=getPosts;
exports.addPost=addPost;