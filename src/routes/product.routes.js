const express = require('express');
const router = express.Router();
const productModel = require('../models/product.model');
const productController = require('../controllers/product.controller');

//get all users----->>>>>>>>>>>>//

router.get('/', productController.findAll )


//get user find by id------>>>>>>>>//
router.get('/getprd',productController.find )


//create user-------//

router.post('/createprd', productController.addproduct)









module.exports = router