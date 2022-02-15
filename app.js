require('dotenv').config(); 
const express=require('express');
const app=express();

const userRouter=require('./api/user/user.router');
//converts json to javascript objects
app.use(express.json());
app.use("/api/user",userRouter);


app.listen(process.env.APP_PORT,()=>{
    console.log("Server is up and running. on"+process.env.APP_PORT);
});
