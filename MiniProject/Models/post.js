const mongoose=require('mongoose');

const postSchema=mongoose.createSchema({
    postData:String,
    Date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

module.exports=mongoose.model("post",postSchema)