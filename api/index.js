const express = require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const User=require('./models/User')
const cors = require('cors')
const jwt = require('jsonwebtoken')
dotenv.config();
//console.log(process.env.MONGO_URL)
//mongoose.connect(process.env.MONGO_URL)

const app = express()

const port = 4040
mongoose.connect(process.env.MONGO_URL)
const jwtSecret = process.env.JWT_SECRET; 
app.use(cors({
    credentials:true,
    origin: process.env.CLIENT_URL,
}))
//require('dotenv').config();
app.get('/test', (req, res) => res.json('Hello World!'))
app.post('/register', async (req, res)=>{
    const {username,password} = req.body;
    const createdUser = await User.create({username,password})
    jwt.sign({userId:createdUser,_id}, jwtSecret, {}, (err, token)=>{
        if (err) throw err;
        res.cookie('token',token).status(201).json('ok');

    } );
//27
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
