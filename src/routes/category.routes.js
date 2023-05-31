const express = require('express');
const router = express.Router();
const categoryModel = require('../models/category.model');
const categoryController = require('../controllers/category.controller');

//get all category----->>>>>>>>>>>>//

router.get('/', categoryController.findAll )


//get user find by id------>>>>>>>>//
router.get('/getcat', categoryController.find)


//create user-------//

router.post('/createcat', categoryController.addCategory)










module.exports = router