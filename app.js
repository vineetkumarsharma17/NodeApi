require('dotenv').config(); 
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.json({
        status:"1",
        message:"Success"
    })
})


app.listen(process.env.APP_PORT,()=>{
    console.log("Server is up and running. on"+process.env.APP_PORT);
});
