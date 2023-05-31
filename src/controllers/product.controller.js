const express = require('express');
const bodyParser = require('body-parser');
const userModel = require('../models/product.model');
const categoryModel = require('../models/category.model');


//add product and save
const addproduct = async (req,res)=>{
console.log(req.body);

if(!req.body.name && !req.body.description && !req.body.brand && !req.body.price){
    res.status(400).send('fill all details')
}
console.log('product---->>>>>>>>');
const user = new userModel({
    name: req.body.name,
    description: req.body.description,
    brand: req.body.brand,
    price: req.body.price
})
await user.save().then(data =>{
    res.send({message:"product added sucessfully",
    user:data
})
}).catch(err =>{
    res.status(500).send({message:err.message || "Some Error Occured Adding Product"})
})
}

//get all products----->>>>>>>//

const findAll = async(req,res)=>{
    try {
       const user = await userModel.find()
       res.status(200).json(user) 
    } catch (error) {
       res.status(404).json({message: error.message}) 
    }
}

// find single product by id----->>>>>>>//

const find = async(req,res)=>{
    try {
        const user = await userModel.findById()
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}











module.exports = {
    addproduct,
    findAll,
    find}