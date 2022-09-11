const express=require('express')
const cors=require("cors");
const conn=require("./utils/connectdb");
const dotenv=require("dotenv");
const userRoute=require("./routes/userRoute")
const postRoute=require("./routes/postRoute");
const app=express();


//middleware
app.use(express.json());
app.use(cors())
dotenv.config();
conn();

app.use("/api/user",userRoute);
app.use("/api/blog",postRoute);



const port=process.env.PORT || 5001;
app.listen(port,()=>{console.log(`Server running at port ${port}`)})