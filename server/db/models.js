const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['Costumer','Admin'],
        default:'Costumer',
    }
})

const bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    thumbnail:String,
})

const User = mongoose.model('User',userSchema);
const Book = mongoose.model('Book',bookSchema);

module.exports = {User,Book}