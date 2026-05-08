const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongopractice')

const userSchema=mongoose.Schema(
    {   
        Name:{
            type:String,
            required:true
        },
        Username:{
            type:String,
            unique:true,
            required:true
        },
        Email:{
            type:String,
            required:true,
            unique:true
        },
        PhoneNumber: {
            type:Number,
            required:true
        },
        Password:{
            type:String,
            required:true
        },
        Gender:{
            type:String,
            required:true
        },
        Dob:{
            type:String,
            required:true
        }
    }
)
module.exports=mongoose.model("user",userSchema)
