import express from 'express'
import { addMovieController, deleteMovieController, getAllMovieController, getRandomMovieController, getSingleMovieController, updateMovieController } from '../controller/MovieController.js';
import verifyToken from '../middleware/verifyToken.js'
const router=express.Router()

//REGISTER MOVIE
router.post("/",verifyToken,addMovieController)

//UPDATE MOVIE
router.patch("/:id",verifyToken,updateMovieController);

//DELETE MOVIE
router.delete("/:id",verifyToken,deleteMovieController);

//GET SINGLE MOVIE
router.get("/find/:id",verifyToken,getSingleMovieController)
//GET ALL MOVIES
router.get("/",verifyToken,getAllMovieController)

//GET RANDOM MOVIE
router.get("/random",verifyToken,getRandomMovieController)

export default router;