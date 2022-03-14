const express = require('express');
const env = require('dotenv');

const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// DB-CONNECT
DB_USERNAME = process.env.DB_USERNAME
DB_PASSWORD = process.env.DB_PASSWORD
DB_DATABASE = process.env.DB_DATABASE

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@e-commerce-db.qhacu.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.error(err);
})

// calling ENV variables
env.config();

app.use(bodyParser());

let PORT = process.env.PORT

// Call env file to use creds
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

// Default Route
app.get('/',(req,res,next)=>{
    res.status(200);
    res.send("Hello from get request");
});

// Default Post Request
app.post('/',(req,res,next)=>{
    res.status(200);
    res.send(`Hello ${req.body}`);
})