const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    name:String,
    age:Number,
    phone:{type:String,unique:true},
    email:{type:String,unique:true},
    password:String,
    role:String
})

userSchema.methods.comparePasswords = async function(password) {
    return await bcrypt.compare(password, this.password)
}
module.exports = mongoose.model('Users',userSchema)