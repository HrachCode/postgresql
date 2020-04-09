const express = require('express');
const root = express.Router();
const posts = require('../models/posts')
const lang = require('../models/language/lang')
const auth = require('../midlwers/auth')
const comments = require('../models/comments')




root.get('/',(req,res)=>{
    posts.findAll()
    .then(data=>{
       
        lang.findAll().then(lang=>{
        if(data.length > 0){
           
            
            res.render('home',{data:data, title:'home',home:true})
        }else{
            res.render('home')
        } 
        })    
    })  
})
root.get('/superadmin',auth,(req,res)=>{
    
    console.log(req.session);
    res.render('admin',{
        title:'administrator',
        adminlog:true,
        user:req.session.user[0]
    })
})

root.get('/login',(req,res)=>{
   
    
    res.render('login',{
        title:'login',
        navlog:true
    })
})

root.get('/logaut',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})

module.exports = root;