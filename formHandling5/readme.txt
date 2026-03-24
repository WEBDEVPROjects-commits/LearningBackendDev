Session and Cookie -->

We sent plain text but server will bet blob which is not directly readable now we have to handle it in a way such that this blob is readable on server.
-->The below two lines will help to convert the data that has been sent in json format from frontend in the form of blob to the format which is understood.//for type json and for type urlencoded

//
app.use(express.json());//for type json 
app.use(express.urlencoded({extended:true})); for type urlencoded
