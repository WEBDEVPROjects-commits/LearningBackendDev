const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const userModel = require('./Models/user');
const { ok } = require('assert');
const { create } = require('domain');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { hash } = require('crypto');
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/create", async (req, res) => {
    console.log(req.body);
    let { Name, Username, Email, PhoneNumber, Password, ConfirmPassword,Gender, Dob } = req.body

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(Password, salt);

    const createdUser = await userModel.create({
        Name,
        Username,
        Email,
        PhoneNumber,
        Password:hashedPassword,
        PhoneNumber,
        Gender,
        Dob
    });
    const token=jwt.sign({email: Email},"secret");
    res.cookie("token",token);
    res.redirect("/login");
})
app.get("/login",(req,res) => {
    // let {Email,Password}=req.params;
    // res.render("login",{Email,Password})
    res.render("login");
})
// app.use((err,req,res,next) => {
//   res.send(err);
//   res.next();

// })//error handling middleware function
app.post("/login",async (req,res) => {
    console.log(req.body)
    let {Email,Password}=req.body;
    const requiredUser=await userModel.findOne({Email:Email});
    // if(!requiredUser)
        if(!requiredUser){
            res.send("Something went wrong");
        }
        else{
        if((requiredUser.Email===Email)){
               const result=await bcrypt.compare(Password,requiredUser.Password)
                if(result==true){
                    res.send("Logged in successfully");
                }
                else{
                    res.send("Entered email or username is incorrect");
                }
        }
        }
})
app.get("/delete",async (req,res) => {
    const users=await userModel.deleteMany({});
    res.send(users);
})
app.get("/read",async (req,res) => {
    const users=await userModel.find();
    res.send(users);
})
app.listen(3000);