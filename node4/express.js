const express=require('express');
const app = express();

  //Middleware function
app.use((req,res,next) => {
   console.log('middleware chala');
   next();//next will help to run the required route after running middleware
});//this will run before going to any route

//Middleware function
app.use((req,res,next) => {
    console.log("this is another middleware");
    next();
});

// '/' is a route
app.get('/', (req, res) => {
  res.send('ye slash route hai');
})

//profile route
app.get("/profile",(req,res,next) => {
    // res.send("ye profile route hai");
    return next(new Error("not implemented"));
})//when we pass an error inside the next() then it will automatically search for the error handling middleware function  and it will execute that handler

// Error handling middleware function
app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send('Something broke');
  next();// next without error wont work on the error handling middleware function
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

//nodemon restarts the server automatically on change(nodemon express.js)