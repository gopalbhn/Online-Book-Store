const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const mongoose = require('mongoose')
 require('dotenv').config();
const userRouter = require('./routes/admin.routes')
app.use(express.json())
app.use(cors());
app.use('/users',userRouter);


mongoose.connect(`${process.env.MONGODB_URI}`).then(()=>{
    console.log('Connection to database connected Sucessfully')
}).catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
console.log(`Listening on port ${port}`);
})