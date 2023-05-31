const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
        default: 'PeterEngland'
    },
    price:{
        type: String,
        required: true,
    },
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
})

module.exports = mongoose.model('Product', ProductSchema)