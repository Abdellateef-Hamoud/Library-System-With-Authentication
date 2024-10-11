const express = require('express')
const router = express.Router()
const booksControler = require('../Controllers/books')




//API to Get All Books (login)
router.get('/api/books',booksControler.getAllBooks)

//API to Get one Book (login)
router.get('/api/books/:id',booksControler.getOneBook)

//API to Delete a Book (Admin)
router.delete('/api/books/:id',booksControler.DeleteBook)

//API to Update a Book (login)
router.put('/api/books/:id',booksControler.updateBook)

//API to Add a Book (Admin)
router.post('/api/books',booksControler.createBook)



module.exports =router