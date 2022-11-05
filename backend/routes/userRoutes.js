const express=require('express');
const { login, register, getAllUser,verifyToken, getUser, refreshToken } = require('../controller/userController');
const auth=require('../middleware/auth')
const router=express.Router();

// router.get('/',auth,login)
router.post('/login',login)
router.post('/register',register)
router.get('/me',verifyToken,getUser)
router.get('/',verifyToken,getAllUser)
router.get('/refresh',refreshToken,verifyToken,getUser)
module.exports=router;