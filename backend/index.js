import express from "express";
import cors from 'cors'
import DBconfig from "./utils/DBconfig.js";
import authRouter from './routes/auth.js'
import userRouter from './routes/UserRoutes.js'
import movieRouter from './routes/MovieRoutes.js'

const app=express();


//middleware
app.use(express.json());
app.use(cors())
DBconfig()

// app.get("/",(req,res)=>{
//     res.json({Success:true})
// })
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/movie",movieRouter)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ohh you are lost, read the API documentation to find your way back home :)'
    })
})
app.listen(5000,()=>{console.log("Server running at port 5000")})