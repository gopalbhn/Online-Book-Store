const { Description } = require("@mui/icons-material");
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
    },
    purchasedBooks:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Book',
        default: function (){
            return this.role === "Costumer" ? [] : undefined;
        }
    }
})

const bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    quantity:Number,
    thumbnail:String,
    category:String,
    description:String,
})

userSchema.pre('save',function(next){
    if(this.role === 'Admin'){
        this.purchasedBooks = undefined;
    }
    next();
})
const User = mongoose.model('User',userSchema);
const Book = mongoose.model('Book',bookSchema);

module.exports = {User,Book}