const express = require('express');
const edit = express.Router();
const posts = require('../models/posts')



edit.get("/edit/:id", function(req, res){
  const postid = req.params.id;
   
  
    posts.findAll({where:{id: postid}, raw: true })
    .then(data=>{
       
        
      res.render("index",{edit:data[0]});
    })
    .catch(err=>console.log('err'));
   
  });

  edit.post('/editpost',(req,res)=>{

    if(!req.body) return res.sendStatus(400);
    const title = req.body.title;
    const body = req.body.post;

    posts.update({title:title, body: body}, {where: {id: req.body.id} }).then(() => {
      res.redirect("/");
    })
    .catch(err=>console.log(err));
  });
  

  module.exports = edit;