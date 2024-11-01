const express = require("express");
const app = express();
const axios = require("axios");
const { User, Book } = require("../db/models");

const {
  generateJwt,
  athunticateJWT,
  isAdmin,
  isCostumer,
} = require("../middleware/auth");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const user = req.body;
  console.log(user);
  console.log("control here");
  const ExistingUser = await User.findOne({ username: user.username });
  if (ExistingUser) {
    res.status(403).json({ message: "user already existed" });
  } else {
    const token = generateJwt(user);
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ message: "User Created sucessfully", token });
  }
});
router.get("/me", athunticateJWT, async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  res.status(200).json({ user });
});
router.post("/login", async (req, res) => {
  const { username, password } = req.headers;
  const user = await User.findOne({ username });
  if (user) {
    if(user.username === username && user.password === password){

      const token = generateJwt(user);
      res.status(200).json({ message: "user loggedIn sucessfully", token });
    }
   
  } else {
    res.status(403);
  }
});

router.post("/admin/signup", athunticateJWT, isAdmin, async (req, res) => {
  const admin = req.body;
  const isAdmin = await User.findOne({
    username: admin.username,
    role: "Admin",
  });
  if (isAdmin) {
    res.status(403).json({ message: "Admin already existed" });
  } else {
    const newAdmin = new User(admin);
    newAdmin.save();
    res.status(200).json({ message: "Admin created sucessfully" });
  }
});
router.post("/addbook", athunticateJWT, isAdmin, async (req, res) => {
  const book = req.body;
  console.log(book);
  if (!book) {
    res.status("403").json({ message: "Books detail not found" });
  }
  const newbook = new Book(book);
  await newbook.save();
  res.status(201).json({ message: "Book listed sucessfully" });
});

router.get("/getbooks", async (req, res) => {
  const books = await Book.find();
  res.status(200).json({ books });
});
  router.post("/purchase", athunticateJWT, isCostumer, async (req, res) => {
    const books = req.body;
    const book = books.book;
   
    if (!book) {
      res.status(403).json({ message: "Books not found" });
    } else {
      const user = await User.findOne({ username: req.user.username });

      console.log("from user", user);
      if (user) {
        book.map(books => {
            user.purchasedBooks.push(books)
            user.purchasedBooks.status="pending"
        })
        
        await user.save();

        res.status(200).json({ purchasedBooks: req.user.purchasedBooks });
      }
    }
  });
module.exports = router;
