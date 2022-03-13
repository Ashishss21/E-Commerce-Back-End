const express = require('express');
const env = require('dotenv');

const app = express();
const bodyParser = require('body-parser')

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
