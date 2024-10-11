const express = require('express')
const bodyparser = require('body-parser') 
const mongoose = require('mongoose') 
const userRouter = require('./Routers/users')
const bookRouter = require('./Routers/books')



const app = express()
app.use(bodyparser.json())
const uri = "mongodb+srv://af1609:123mag2123@cluster0.w6lwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = async() =>{
    try {
        mongoose.set('strictQuery',false)
        mongoose.connect(uri)
        console.log("Connected To Database")
    } catch (error) {
        console.log("Connect to database error:",error)
        process.exit()
    }
}

connectToDB()

app.use('/', userRouter)
app.use('/', bookRouter)

app.listen(9093) 




// mvc architecture

//Book management api's
//Secure our api's
//Roles