const fs= require('fs');
// fs.writeFile("hey.txt","Hey hello kaise hoe",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.appendFile("hey.txt"," abhi dala hai text just abhi abhi ",function(err){
//     err?console.error(err):console.log("Append me bhi error nahi aya dost")
// })  
// fs.rename("hey.txt","hello.txt",function(err){
//     err?console.error(err):console.log("i have renamed this file successfully")
// })
// fs.copyFile("hello.txt","../Copy/copy.txt",function(err){
//     err?console.error(err):console.log("I have just copied the text into copy.txt");
// })
// fs.unlink("../Copy/copy.txt",function(err){
//     err?console.error(err):console.log("removed");
// }) //deletes the file
// fs.rm("../Copy",{recursive:true},function(err){
//     err?console.error(err):console.log("I removed the directory Copy");
// })//use to remove the folder 
fs.readFile("../copy/new.txt",(err,data)=>{
    console.log("This is the data i am reading: "+data);
})