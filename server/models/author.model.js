const mongoose = require("mongoose")

// DEFINE SCHEMA
const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Custom name validation requirement"],
        minLength:[2, "Name must be 2 characters long"]
    }
}, {timestamps:true});

// REGISTER SHCEMA
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;