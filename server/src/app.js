// require express for setting up the express server
const express = require('express');

//requiring the registerUser function from userCtrl.js to pass in the post req.
const {registerUser} = require('./controllers/users/usersCtrl');
const userRoute = require('./routes/users/usersRoute')
//importing the database into the server
const dbConnect = require('./config/dbConnect');


//connecting the db
dbConnect();
// using express
const app = express();

app.use('/',userRoute);

module.exports=app;

//lprArypKGVp4DN0c

//mongodb+srv://Yashita:<password>@cluster0.mn1pf.mongodb.net/?retryWrites=true&w=majority