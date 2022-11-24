import express from "express";
import {loginController, registerController} from '../controller/AuthController.js'
const router=express.Router();

//Register user
router.post("/register",registerController);

//Login user
router.post("/login",loginController)
export default router;