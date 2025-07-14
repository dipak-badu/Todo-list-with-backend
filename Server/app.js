const express = require('express');
const connectDB = require('./conn/conn.js')
require('dotenv').config();
const auth = require('./route/auth.route.js')

const app = express();
app.use(express.json());

// connect to Database
connectDB();

app.get('/', (req, res)=>{
    res.send("server started!!")
})

app.use('/api/v1', auth)

app.listen(process.env.PORT|| 3000, ()=>{
    console.log(`Server started at port ${process.env.PORT}`)
})