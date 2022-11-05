const express=require('express')
const cors=require("cors");
const app=express();
const dbConfig=require('./config/connectDB')
const userRoute=require('./routes/userRoutes');
const cookieParser = require('cookie-parser');


//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({credentials:true,origin:'http://localhost:5173'}))
dbConfig();

app.use('/user',userRoute);




app.listen(5000,()=>{console.log("Server running at port 5000")})