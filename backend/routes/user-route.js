const express=require('express');
const router=express.Router();

const { getUsers, addUser, login, deleteUser, verifyUser, refreshToken } = require('../controllers/user-controller');

router.get("/",getUsers);
router.post("/register",addUser);
router.post("/login",login)
router.delete("/:id",verifyUser,deleteUser);
router.get("/refresh/:token",refreshToken);


module.exports=router;