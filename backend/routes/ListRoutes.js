import express from 'express'
import { addListController, deleteListController, getListController } from '../controller/ListController.js'
import verifyToken from '../middleware/verifyToken.js'
const router=express.Router()

router.post("/",verifyToken,addListController);

router.delete("/:id",verifyToken,deleteListController);

router.get("/",verifyToken,getListController)

export default router