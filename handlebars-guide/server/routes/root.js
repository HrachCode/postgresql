const express = require('express');
const root = express.Router();
const posts = require('../models/posts')


root.get('/',(req,res)=>{
    posts.findAll()
    .then(data=>{
       
        
        res.render('home',{data:data})
        
    })
})

module.exports = root;