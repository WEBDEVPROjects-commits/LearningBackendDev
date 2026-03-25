const express=require('express');
const app=express();
const path=require('path');

app.use(express.json());//this is a parser
app.use(express.urlencoded({extended:true}));//This is also a parser

app.use(express.static(path.join(__dirname,'public')));//it states that find all the static files like images,stylesheet,videos,vanilla js in the public folder ,__dirname is the path of notesProject folder
app.set('view engine','ejs');

app.get("/",(req,res) => {
  res.render("index");//this renders index.ejs
})

app.get("/profile/:username",(req,res) => {
  res.send(`Welcome ${req.params.username}`)
})// ':' The colon is used for dynamic routing that means we can enter any thing in place of username in the browser and it will run the route handler function

app.get("/author/:username/:age",(req,res) => {
    res.send(`The username is ${req.params.username} and the age is ${req.params.age}`)
})
app.listen(3000,(err) => {
    err?console.error("Error Detected"+err):console.log("Port is running");
})