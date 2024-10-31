import express from 'express'
import dotenv from 'dotenv'
const app =express()

app.get('/',(req,res) =>{
    res.send("Welcome to my First website")
})

app.get('/login',(req,res) =>{
    res.send("Wassup Login page")
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`app listening at ${port}`)
})