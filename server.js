const http=require('http');
const express=require("express")
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const {json}=require("express");
const db=require("./src/Config/mssmConfig");
const PORT=process.env.PORT || 4000

app.use(json());


app.use('/auth',require('./src/Routes/login'))

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT,()=>{console.log(`server listening on port ${PORT}`)});
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });