const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
const URL= process.env.MONGODB_URL;

mongoose.connect(URL, {
  
    
    
    
});

const studentsRouter = require("./routes/students");
app.use("/student",studentsRouter);

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb connection is successfully!");
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number : ${PORT}`);
});
