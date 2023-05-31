const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')
const userModel = require('../models/user.model');


//get all users----->>>>>>>>>>>>//

router.get('/', UserController.findAll )


//get user find by id------>>>>>>>>//
router.get('/getuser', UserController.findOne)


//create user-------//

router.post('/createdata', UserController.createUser)
console.log('create-user---->>>>');








module.exports = router