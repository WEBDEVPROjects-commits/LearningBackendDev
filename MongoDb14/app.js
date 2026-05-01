const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
app.use(cookieParser());
//Concept of cookies

// const cookieParser=require('cookie-parser');
// app.use(cookieParser())

// app.get("/",(req,res) => {
//   res.cookie("name","harsh")
//   res.send("done");
// })
// app.get("/read",(req,res) => {
//     console.log(req.cookies);
// })f
// app.get("/",(req,res) => {
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("thisIsPassword", salt, function(err, hash) {
//         console.log(hash);
//     });
// });
// })

//used for decryption or password matching...
// app.get("/",(req,res) => {
//    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true
// });
// })


app.get("/",(req,res) => {
    let token=jwt.sign({email:"harsh@example.com"},"secret")
    res.cookie("token",token);
    res.send("done");
})

app.get("/read",(req,res) => {
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
})
app.listen(3000)