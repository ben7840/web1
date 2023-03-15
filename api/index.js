const express = require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const User=require('./models/User')
const jwt = require('jsonwebtoken')
dotenv.config();
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)

const app = express()
const port = 3001
mongoose.connect(process.env.MONGO_URL)


//require('dotenv').config();
app.get('/test', (req, res) => res.send('Hello World!'))
app.post('/register', async (req, res)=>{
    const {username,password} = req.body;
    const createdUser = await User.create({username,password})
    jwt.sign({userId:createdUser, id}, jwtSecret ), then((err, token)=>{
        if (err) throw err;
        res.cookie('token+')//ekane sash

    })
//27
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//FaylX3gntf7t4jPv