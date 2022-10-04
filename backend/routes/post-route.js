const express=require('express');
const { getPosts, addPost, getPostById, updatePost, deletepost } = require('../controllers/post-controller');

const router=express.Router();


router.get("/",getPosts);
router.post("/",addPost);
router.get("/:id",getPostById);
router.patch("/:id",updatePost);
router.delete("/:id",deletepost);


module.exports=router;