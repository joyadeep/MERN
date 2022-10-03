const express=require('express');
const router=express.Router();

const { getUsers, addUser, login } = require('../controllers/user-controller');

router.get("/",getUsers);
router.post("/register",addUser);
router.post("/login",login)


module.exports=router;