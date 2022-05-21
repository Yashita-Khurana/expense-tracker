const express = require('express');
//importing the database into the server
const dbConnect = require('./config/dbConnect');

//connecting the db
dbConnect();
const app = express();
module.exports=app;

//lprArypKGVp4DN0c

//mongodb+srv://Yashita:<password>@cluster0.mn1pf.mongodb.net/?retryWrites=true&w=majority