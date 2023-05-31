const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    name:{
        type: String,
    },
    color:{
        type: String,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
})

module.exports = mongoose.model('Category', CategorySchema)