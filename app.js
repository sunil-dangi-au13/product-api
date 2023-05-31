const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user.routes')
const productRoutes = require('./src/routes/product.routes')
const categoryRoutes = require('./src/routes/category.routes')
const usermodel = require('./src/models/user.model')
const userModel = require('./src/models/product.model')
const Usermodel = require('./src/models/category.model')



//express appp------>>>>>>//
const app = express();


//server port------>>>>>>//

const port = process.env.PORT ||8000


//parse request------>>>>>>//
app.use(bodyParser.urlencoded({extended: true}));


//json data----->>>>>>//

app.use(bodyParser.json());



// routes------>>>>>//
app.use('/api/', userRoutes);
//console.log('users');
 app.use('/api/category', categoryRoutes);
//console.log('cat-------->>>>>>>>>');
 app.use('/api/product', productRoutes)


 const User = require('./src/models/category.model')
 //const USER = require('./src/models/category.model')
//  db.cateegories.aggregate([{ 
//     $lookup: {
//      from: 'User',
//      localField: 'User_ID',
//      foreignField: 'ID',
//      as: 'New Data'
//     }},
//     { 
//      $unwind: '$New Data'
//     },
//     $lookup: {
//      from: 'Items',
//      localField: 'Item_ID',
//      foreignField: 'ID',
//      as: 'Item'
//     }},
    
//     {
//      $project: {
//       Quantity: 1,
//       Customer_Name: 1,
//       Item_Name: 1
//      }
//     }
//    ]);

//  User.find()
//  .populate({path:'userId'})


 User.find()
 .populate({
    path: "userId",
    populate:{
        path: "User"
    }
 })
 .then(user => console.log(user))
 .catch(error => console.log(error))

// app.get('/',(req,res)=>{
//     res.send('Get api working')
// })
// app.post('/user',(req,res)=>{
//     res.send('POST API WORKING')
// })




//configure database----->>>>>//
const dbConfig =require('./src/config/db.config');
const mongoose = require('mongoose');
const router = require('./src/routes/user.routes')


//connecting to DB----->>>>>>>//

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
}).then(()=>{
    console.log('MONGODB CONNECTED SUCESSFULLY');
}).catch(err =>{
    console.log('DB Connection Failed');
})

// Server listen------>>>>>>>//

app.listen(port,()=>{
    console.log(`Server is running on the Port ${port}`);
})
