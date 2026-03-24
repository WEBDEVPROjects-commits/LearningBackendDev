//we installed cookie parser (npm i cookie-parser)

const express=require('express'); 
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));