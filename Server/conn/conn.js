const mongoose = require('mongoose');
require('dotenv').config();
const connectDB =   async(req, res)=>{
   try {
     await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB connected Successfully!!")    
   } catch (error) {
   console.error("MongoDB connection failed!!")
   process.exit(1);
   }
}

module.exports = connectDB;