const express = require('express');
const query_join = express.Router();
const posts = require('../models/posts')
const comments = require('../models/comments')
const sequelize = require('../config/index')
const Sequelize = require('sequelize')
const upload = require('../midlwers/multer')

query_join.get('/outer_join',(req,res)=>{
    let queryParams = {
        where: {},
        include: [
          {
            model:comments,
            as: 'post_comments',
            //attributes: [ 'id', 'name' ]
          }
        ]
      };
      posts.findAll(queryParams)
      .then(data=>{
         res.render('test',{
             data:data,
             title:'test query'
         })
          
      }).catch(err=>{
          console.log(err);
          
      })
})
query_join.get('/inner_join',(req,res)=>{
    let queryParams = {
        where: {},
        include: [
          {
            model:comments,
            as: 'post_comments',
            required: true  // ОТЛИЧИЯ ТУТ <<<----
            //attributes: [ 'id', 'name' ]
          }
        ]
      };
      posts.findAll(queryParams)
      .then(data=>{
         res.render('test',{
             data:data,
             title:'test query'
         })
          
      }).catch(err=>{
          console.log(err);
          
      })

      

})

query_join.get('/native_sql_queris',(req,res)=>{
    sequelize.query(`SELECT * FROM users`, {
        raw: true, //если для таблицы, к которой происходит обращение, не определена модель
        type: Sequelize.QueryTypes.SELECT //тип запроса: SELECT | INSERT | UPDATE | DELETE ...
      }).then(result => {
        res.render('test',{
            user:result,
            title:'native sql queris'
        })
      })
        .catch(err=>console.log(err)
        )

})

query_join.post('/upload',(req,res)=>{  
   
    upload(req, res, (err) => {
        if(err){
          res.render('index', {
            msg: err
          });
        } else {
          if(req.file == undefined){
            res.render('index', {
              msg: 'Error: No File Selected!'
            });
          } else {
            res.render('index', {
              msg: 'File Uploaded!',
              file: `uploads/${req.file.filename}`
            });
          }
        }
      });
    
})

module.exports = query_join;