const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongopractice')

const userSchema=mongoose.Schema(
    {   
        Name:String,
        Username: String,
        Email:String,
        PhoneNumber: Number,
        Password:String,
        Gender:String,
        Dob:Number
    }
)
module.exports=mongoose.model("user",userSchema)
