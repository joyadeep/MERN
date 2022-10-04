const express=require('express')
const cors=require("cors");
const app=express();
const dotenv=require('dotenv')
const dbConfig=require('./configs/dbConfig')
const userRoute=require('./routes/user-route')
const postRoute=require('./routes/post-route');

//middleware
dotenv.config();
app.use(express.json());
app.use(cors())
dbConfig();
app.use("/user",userRoute);
app.use("/post",postRoute);




app.listen(5000,()=>{console.log("Server running at port 5000")})