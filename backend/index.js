const express=require('express')
const cors=require("cors");
const app=express();


//middleware
app.use(express.json());
app.use(cors())




app.listen(5000,()=>{console.log("Server running at port 5000")})