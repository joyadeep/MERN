import express from 'express'
import { deleteController, getAllUserController, getSingleUserController, updateController } from '../controller/UserController.js'
import verifyToken from '../middleware/verifyToken.js'
const router=express.Router()

//UPDATE
router.patch("/:id",verifyToken,updateController)

//DELETE
router.delete("/:id",verifyToken,deleteController)
//GET SINGLE
router.get("/:id",verifyToken,getSingleUserController);
//GET ALL
router.get("/",verifyToken,getAllUserController)

//GET STATS

export default router;