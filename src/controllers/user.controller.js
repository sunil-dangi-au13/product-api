const express = require('express');
const bodyParser = require('body-parser')
const userModel = require('../models/user.model');




// create user--->>>>>>//
 const createUser = async(req,res) =>{
    console.log(req.body);
    console.log('users-------->>>>>>');
    if(!req.body.name && !req.body.email && !req.body.phone){
        res.send('fill the user details')
    }

    console.log("user saved-------");
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
     })
    console.log('user--------');
     await user.save().then(data =>{
        res.send({message:"User created sucessfully",
         user:data
      })
         console.log('user saved------>>>>>>>>>');
     }).catch(err =>{
        res.status(500).send({message: err.message || "Some error occured while creating user"})
     });
 }

 //get retrive all users----->>>>>>//
 const findAll = async(req,res) =>{
    try {
        const user = await userModel.find()
        res.status(200).json(user)
    } catch (error) {
       res.status(404).json({message: error.message}) 
    }
 }


 //find single user by id----->>>>>>>>//

 const findOne = async(req,res)=>{
    try {
        const user = await userModel.findById(req.query.id)
        res.status(200).json(user)
    } catch (error) {
      res.status(404).json({message: error.message})  
    }
 }


 module.exports = {
    createUser,
    findAll,
    findOne,
 }