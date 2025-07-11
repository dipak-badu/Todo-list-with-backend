const express = require('express');
const connectDB = require('./conn/conn.js')
require('dotenv').config();

const app = express();
app.use(express.json());

// connect to Database
connectDB();

app.get('/', (req, res)=>{
    res.send("server started!!")
})

app.listen(process.env.PORT|| 3000, ()=>{
    console.log(`Server started at port ${process.env.PORT}`)
})