const express=require("express");
const router=express.Router();
const {login, signup, deleteUser, getallusers, getUser}=require("../controllers/userController");


router.get("/:id",getUser);
router.get("/",getallusers);
router.post("/login",login)
router.post("/signup",signup);
router.delete("/:id",deleteUser);

module.exports=router;