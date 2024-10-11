const bookSchema = require('../Schemas/book')

exports.getAllBooks = async function(req,res){
    try{
        const books = await bookSchema.find()
        res.json({message:"Done",data: books})

    }catch(err){
        res.status(400).json({message:'Something went wrong',error:err})

    }

}

exports.getOneBook = async function(req,res){
     try{
        const book = await bookSchema.find({_id: req.params.id})
        res.json({message:"Done",data: book})

    }catch(err){
        res.status(400).json({message:'Something went wrong',error:err})
    }

}

exports.DeleteBook = async function(req,res){
    try{
        await bookSchema.findByIdAndDelete(req.params.id)
        res.json({message:"Done",data:[]})

    }catch(err){
        res.status(400).json({message:'Something went wrong',error:err})
    }

}

exports.updateBook = async function(req,res){
    try{
        await bookSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})

    }catch(err){
        res.status(400).json({message:'Something went wrong',error:err})
    }

}

exports.createBook = async function(req,res){
    try{
        const createBook = await bookSchema.create(req.body)
        res.json({message:"Done",data:createBook})

    }catch(err){
        res.status(400).json({message:'Something went wrong',error:err})
    }

}