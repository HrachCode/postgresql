const express = require('express');
const root = express.Router();
const posts = require('../models/posts')
const lang = require('../models/language/lang')

root.get('/',(req,res)=>{
    
    posts.findAll()
    .then(data=>{
       
        lang.findAll().then(lang=>{
        if(lang.length > 0){
           
            
            res.render('home',{data:data, title:'home',home:true})
        }else{
            console.log('not finde');  
        } 
        })    
    })  
})
root.get('/superadmin',(req,res)=>{
    res.render('admin')
})

root.get('/login',(req,res)=>{
    console.log(res.locals);
    
    res.render('login',{
        title:'login',
        navlog:true
    })
})

module.exports = root;