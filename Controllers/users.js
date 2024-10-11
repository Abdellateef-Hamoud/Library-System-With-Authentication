const userModel = require('../Schemas/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async function(req,res) {
    try{
        let newUser = new userModel(req.body)
        //Hash Password
        
        const hashedPassword = await bcrypt.hash(req.body.password , 10)
        newUser.password = hashedPassword


        let createdUser = await newUser.save()
        

        res.json({message:"User Added Successfully",User:createdUser})
        
    }
    catch(error){
        res.status(400).json({message:"error"})
    }
    
}

exports.login = async function(req,res){
    try{
        let user = await userModel.findOne({email: req.body.email})

        if(!user){
            res.status(401).json({message:"Invalid Email or Password"})
        }
        
    let passwordCheck = await user.comparePasswords(req.body.password)
    if (!passwordCheck) {
        return res.status(401).json({ message: "Invalid Email or Password" });
    }

    const token = jwt.sign({_id :user._id , name :user.name }, 'secret')
    res.status(200).json({message:"User logged in", user: {name:user.name, email:user.email, token}})
    }
    catch(error){
        res.status(400).json({message:"error"})
    }
    

}