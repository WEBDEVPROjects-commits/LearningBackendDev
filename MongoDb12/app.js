const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./userModel')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))

app.set("view engine","ejs")

app.get("/",async (req,res) => {
    let users=await userModel.find();
    res.render("index",{users:users});  
})
app.post("/create",async (req,res) => {

    let createdUser=await userModel.create(
        {
            username:req.body.username,
            age:req.body.age,
            email:req.body.email,
            phone:req.body.phone,
        }
    )
    res.redirect("/")
})
app.listen(3000,(err) => {
        err?console.error(err):console.log("Port succesfully running")
})