const express = require('express');
const Admin = express.Router();
const admin = require('../models/language/lang');


Admin.post('/test',(req,res)=>{
    
   const heder = {
       home:req.body.home,
       comments:req.body.comments,
       admin:req.body.admin
   } 

   const newComment = {
    value1:heder,
    language:'en',
    
    }
    
    admin.create(newComment)
    .then(data=>{
        console.log('succsses');
        
       
        
    }).catch(err=>{
        console.log(err);
        
    })
})

Admin.post('/test2',(req,res)=>{
   
    admin.findAll()
    .then(data=>{
        console.log(data);
        
    }).catch(err=>{
        console.log(err);
        
    })
})


module.exports = Admin;