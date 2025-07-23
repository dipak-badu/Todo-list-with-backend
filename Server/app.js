const express = require('express');
const connectDB = require('./conn/conn.js')
require('dotenv').config();
const auth = require('./route/auth.route.js')
let todo = require('./route/list.route.js')
const cors = require('cors');
const errorHandler = require("./middleware/errorHandler.js")
const app = express()



app.use(cors({
  origin: 'http://localhost:5173', // frontend origin
  credentials: true
}));

app.use(express.json());

// connect to Database
connectDB();

app.get('/', (req, res)=>{
    res.send("server started!!")
})

app.use('/api/v1', auth);
app.use('/api/v2', todo);

app.use(errorHandler);

app.listen(process.env.PORT|| 3000, ()=>{
    console.log(`Server started at port ${process.env.PORT}`)
})