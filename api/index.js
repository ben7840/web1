const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const User=require('./models/User')
const cors = require('cors')
const jwt = require('jsonwebtoken')
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
//console.log(process.env.MONGO_URL)
//mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
const port = 4040

//mongoose.connect(process.env.MONGO_URL, (err)=>{
    //if (err) throw err;
//})
const jwtSecret = process.env.JWT_SECRET; 
app.use(cookieParser())
app.use(cors({
    credentials:true,
    //origin: 'http://127.0.0.1:5173'
    origin: process.env.CLIENT_URL,
}))
//require('dotenv').config();
app.get('/test', (req, res) => {res.json('Hello World!')})

app.get('/profile', async(req,res)=>{
    const token=req.cookies?.token;
    if(token){
        jwt.verify(token, jwtSecret,{},(err, useData)=>{
            //const {id, username}= userData
            if (err) throw err
            //const {id, username}=userData 
            res.json(userData)
        })
    } else{
        res.status(401).json('no token');
        //res.json(403)
        


    }
 
})
app.post('/register', async (req, res)=>{
    const {username,password} = req.body;
    try{
        const createdUser = await User.create({username,password})
        jwt.sign({userId:createdUser,_id,username}, jwtSecret, {}, (err, token)=>{
            if (err) throw err;
            res.cookie('token',token,{sameSite:'none', secure:true}).status(201).json({
             id: createdUser._id,
             
            });
    
        } );
    }catch(err){
        if (err) throw err;
        res.statusMessage(500).json('error');
    }
  
//27
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
