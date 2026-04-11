const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userModel=require('./usermodel');

app.get('/',(req,res) => {
  res.send("Hello");
})
app.get('/create',async (req,res) => {
    let createdUser=await userModel.create({
        name:"me",
        email:"me@gmail.com",
        username:"harsh"
    })//mongoose code is asynchronous
    console.log("hey");
    res.send(createdUser);
})
app.get("/update",async (req,res) => {
    
   let updatedUser=await userModel.findOneAndUpdate({name:"harshit"},{email:"harshit@gmail.com"},{new:true})
    res.send(updatedUser);
})
app.get("/read",async (req,res) => {
    let users=await userModel.find();//find gives array
    // let users=await userModel.findOne();//findone gives first element of array ie. an object
    res.send(users);
})
app.get("/delete",async (req,res) => {
    let deletedUser=await userModel.findOneAndDelete({name:"me"});
    res.send(deletedUser);
})
app.listen(3000,(err) => {
    err?console.error(err):console.log("Port running successfully")
})