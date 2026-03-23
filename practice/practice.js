const express=require('express');
const app=express();

app.use((req,res,next) => {
   next();
})

app.get("/",(req,res,next) => {
    res.send("hello "+ req.url);
})

app.get("/profile",(req,res,next) => {
    res.send("")
})
app.listen(3000);