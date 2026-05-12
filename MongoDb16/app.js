const express=require('express');
const app=express();
const userModel=require("./models/user");
const postModel=require("./models/post");

app.get("/",(req,res) => {
  
})
app.get("/create",async (req,res) => {
   let user=await userModel.create({
        username:"harsh",
        age:15,
        email:"harsh@gmail.com"
    })
    res.send(user);
})
app.get("/post/create",async (req,res) => {
        let post=await postModel.create({
            postData:"Hello this is a post",
            user:"69fef96ec411900176c8c3bb",
        });
        let user=await userModel.findOne({_id:"69fef96ec411900176c8c3bb"}); 
        user.posts.push(post._id);
        await user.save();
        res.send({post,user});
})

app.listen(3000);