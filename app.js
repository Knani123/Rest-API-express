const express=require('express');
const app=express();
//Import Route
const weatherRoute=require('./routes/weather')
// use View Engine
app.set('view engine','ejs')
// app.use .. capte les request
app.use(express.urlencoded({extended:true}))
//Middleware ejs
app.use(express.static('public'))
// Middleware route
app.use('/',weatherRoute)

app.get('*',(req,res)=>{res.send('Hello from express')})
 
app.listen(5000,(req,res)=>{
    console.log('Hello, your app is runing on 5000')
})