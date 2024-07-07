const express=require("express")
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const {json}=require("express");
const PORT=process.env.PORT || 4000
const db = require('./src/Config/mssmConfig');
const cookieParser=require("cookie-parser");


app.use(cookieParser());
app.use(json());


app.use('/auth',require('./src/Routes/login'));
app.use('/register',require('./src/Routes/register'));
app.use('/refresh',require('./src/Routes/refresh'));



db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT,()=>{console.log(`server listening on port ${PORT}`)});
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });