const express=require('express');
const app=express();
const path=require('path');
const userModel=require("./Models/user");
const jwt=require('jsonwebtoken');
const bcrypt=require('brcypt');
const cookieParser=require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.render("register");
});
app.post("/create",(req,res)=>{
    let {Name,Username,Email,Password}=req.body
    let createdUser=userModel.create({
    Name:Name,
    Username:Username,
    Email:Email,
    Password:Password
    })

})
app.listen(3000);