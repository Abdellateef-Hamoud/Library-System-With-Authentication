const express = require('express')
const router = express.Router()
const userController = require('../Controllers/users')


router.post('/api/users/register',userController.register)
router.post('/api/users/login',userController.login)

module.exports =router