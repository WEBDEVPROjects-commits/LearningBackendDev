const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/UserDatabase");

const userSchema=mongoose.Schema({
    username:String,
    age:Number,
    email:String,
    phone:Number
})
module.exports=mongoose.model("user",userSchema)