const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')

app.get("/",(req,res) => {
    fs.readdir('./files',(err,files) => {
        res.render("index",{files:files});
    })
})
app.post("/create",(req,res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join("")}.txt`,`${req.body.details}`,(err) => {
        err?console.error(err):console.log("File succesfully created");
        res.redirect("/")
    })
})
app.get("/files/:file",(req,res) => {
        fs.readFile(`./files/${req.params.file}`,(err,data) => {
            err?console.error(err):console.log("Successfully reading the file")
            res.render("show",{data:data,file:req.params.file})
        })
})

app.listen(3000)