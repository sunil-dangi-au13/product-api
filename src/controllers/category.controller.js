const express = require('express');
const bodyParser = require('body-parser');
const userModel = require('../models/category.model');

// Add a Category----->>>>>>>>>>//
const addCategory = async(req,res)=>{
console.log(req.body);
if(!req.body.name && !req.body.color){
    res.status(400).send('fill category details')
}
const user = new userModel({
    name: req.body.name,
    color: req.body.color
})
await user.save().then(data =>{
    res.send({message: "Category Added Sucessfully",
    user:data
})
}).catch(err=>{
    res.status(500).send({message: err.message}) || "Some Error Occured"
})
}

// find all Category------>>>>>>>>>>//

const findAll = async(req,res)=>{
    try {
        const user = await userModel.find()
        res.status(200).json(user)
    } catch (err) {
      res.status(404).json({message: err.message})  
    }
}


// Find single category by id------>>>>>>//


const find = async(req,res)=>{
    try {
      const user = await userModel.findById()
      res.status(200).json(user)  
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//get product by category id//
// const getProductbyCategoryId = (id,callback) =>{
//     userModel.find({categoryId:id})
//     .populate({path:'senderId'})
// }

module.exports = {
    addCategory,
    find,
    findAll,
    //getProductbyCategoryId
}