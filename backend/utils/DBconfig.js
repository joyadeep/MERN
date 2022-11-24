import mongoose from "mongoose";
const dev_db_url = 'mongodb+srv://admin:admin@cluster0.vd8ragn.mongodb.net/netflix?retryWrites=true&w=majority';

// connects our back end code with the database
const DBconfig=async()=>{
try {
    await mongoose.connect(dev_db_url, { useNewUrlParser: true });
    console.log("connected to database successfully");

} catch (error) {
    console.log("Error : cannot connect ",error)
}
}

export default DBconfig