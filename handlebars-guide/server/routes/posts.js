const express = require('express');
const create = express.Router();
const posts = require('../models/posts')


create.get("/", function(req, res){
    res.render("index.hbs",{add:'post'});
});

// добавление данных
create.post("/", function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
                
     const data = {
        title:req.body.title,
        body:req.body.post
     }
    posts.create(data).then(()=>{
       
        
      res.redirect("/");
    }).catch(err=>console.log(err));
});


module.exports = create;