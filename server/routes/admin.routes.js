const express = require('express');
const app = express();
const {User, Book} = require('../db/models')

const {generateJwt,athunticateJWT,isAdmin} = require('../middleware/auth')

const router = express.Router();

router.post('/signup',async(req,res)=>{
    const user = req.body;
    console.log(user)
    console.log('control here')
    const ExistingUser = await User.findOne({username:user.username})
    if(ExistingUser){
        res.status(403).json({message:'user already existed'});
    }else{
        const token = generateJwt(user);
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({message:'User Created sucessfully',token})
    }
});
router.post('/login',async(req,res)=>{
    const {username,password} = req.headers;
    const user = await User.findOne({username});
    if(user){
        const token = generateJwt(user)
        res.status(200).json({message:'user loggedIn sucessfully',token});
    }else{
        res.status(403);
    }
})

router.post('/signup',isAdmin,async(req,res)=>{
    const admin = req.body;
    const isAdmin = await User.findOne({username:admin.username, role:'Admin'})
    if(isAdmin){
        res.status(403).json({message:'Admin already existed'})
    }else{
        const newAdmin = new User(admin)
        newAdmin.save();
        res.status(200).json({message:'Admin created sucessfully'})
    }
})
router.post('/addbook',athunticateJWT,async (req,res)=>{
    const book = req.body;
    console.log(book)
    if(!book){
        res.status('403').json({message:"Books detail not found"})
    }
    const newbook = new Book(book);
    await newbook.save();
    res.status(201).json({message:'Book listed sucessfully'});
})

router.get('/getbooks',async (req,res)=>{
   const books =  await Book.find();
res.status(200).json({Books:books});
}),
module.exports = router;