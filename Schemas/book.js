const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const BookSchema = new Schema({
    name:String,
    author:String,
    description:String,
    price:Number,
})

module.exports = mongoose.model('Books',BookSchema)