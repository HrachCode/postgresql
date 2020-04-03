const express = require('express');
const root = express.Router();
const posts = require('../models/posts')
const lang = require('../models/language/lang')

root.get('/',(req,res)=>{
    posts.findAll()
    .then(data=>{
       
        lang.findAll().then(lang=>{
        if(lang.length > 0){
           
            const result = {
                data:data,
                lang:lang
            }
           
            
            res.render('home',{data:result})
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
    res.render('404')
})

module.exports = root;