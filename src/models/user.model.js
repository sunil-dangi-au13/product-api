const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
name:{
    type: String,
    required: true,
},
email:{
    type: String,
    required: true,
},
phone:{
    type: String,
    required: true,
},
categories:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
}
})
module.exports = mongoose.model('User',UserSchema)