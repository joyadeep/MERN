const mongoose = require('mongoose');
const dev_db_url = 'mongodb+srv://admin:admin@cluster0.l5teuls.mongodb.net/production?retryWrites=true&w=majority';

// connects our back end code with the database
const dbConfig=async()=>{
try {
    await mongoose.connect(dev_db_url, { useNewUrlParser: true });
    console.log("connected to database successfully");

let db =await mongoose.connection;

await db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
await db.on('error', console.error.bind(console, 'MongoDB connection error:'));
} catch (error) {
    console.log("Error : cannot connect ",error)
}
}

module.exports=dbConfig;