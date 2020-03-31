const express = require('express');
const delate = express.Router();
const posts = require('../models/posts');

delate.post('/:id',(req,res)=>{
    
    posts.destroy({where: {id: req.params.id} }).then(() => {
        res.redirect("/");
      }).catch(err=>console.log(err));
    
})

module.exports = delate;