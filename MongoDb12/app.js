const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./models/userModel')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))

app.set("view engine","ejs")

app.get("/",async (req,res) => {
    let users=await userModel.find();
    res.render("index",{users:users});
})
app.post("/create",async (req,res) => {
    let {username,age,email,phone}=req.body;
    let createdUser=await userModel.create(
        {
            username:username,
            age:age,
            email:email,
            phone:phone,
        }
    )
    res.redirect("/")
})
app.get("/delete/:id",async (req,res) => {
        await userModel.findOneAndDelete({ _id:req.params.id});
        res.redirect("/")
})

app.get("/update/:id",(req,res) => {
    res.render("update",{id:req.params.id});
})
app.post("/updated/:id",async (req,res) => {
    let {username,age,email,phone}=req.body;
    await userModel.findOneAndUpdate({_id:req.params.id},{username:username,age:age,email:email,phone:phone},{new:true})
    res.redirect("/");
})
app.get("/read",async (req,res) => {
    let users=await userModel.find();
    res.send(users);
})
app.listen(3000,(err) => {
        err?console.error(err):console.log("Port sucessfully running")
})