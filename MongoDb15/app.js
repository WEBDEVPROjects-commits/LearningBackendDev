const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const path=require('path');
const userModel=require('./Models/user');
const { ok } = require('assert');
const { create } = require('domain');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
app.set("view engine","ejs");
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res) => {
    res.render("index")
})

app.post("/create",async (req,res) => {
    console.log(req.body)
    let {Name,Username,Email,PhoneNumber,Password,Gender,Dob}=req.body
    const createdUser=await userModel.create({
        Name,
        Username,
        Email,
        PhoneNumber,
        Password,
        PhoneNumber,
        Gender,
        Dob
    });
    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(Password,salt,(err,result) => {
            console.log(result);
        })
    })
})

app.listen(3000);