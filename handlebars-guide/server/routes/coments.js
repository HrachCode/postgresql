const express = require('express');
const Coment = express.Router();
const coments = require('../models/comments');

Coment.post('/:id',(req,res)=>{
    
   res.render('main',{id:req.params.id})
})
Coment.get('/:id',(req,res)=>{
   
    coments.findAll({where:{posts_id: req.params.id}, raw: true })
    .then(data=>{
       res.render('comments',{comments:data})
        
    })
    .catch(err=> console.log(err))
    
})

Coment.post('/', async (req,res)=>{
    let newComment = {
        posts_id: req.body.id,
        userName: req.body.usernam,
        comment: req.body.comment
      }
    
    try {
        const comment = coments.create(newComment)
        res.redirect('/')
        
    } catch (error) {
        console.log(error);
        
    }
    
     
 })

module.exports = Coment;