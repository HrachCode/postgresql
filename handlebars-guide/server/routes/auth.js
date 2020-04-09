const {Router} = require('express')
const auth = Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')


auth.get('/login', async (req, res) => {
  res.render('login', {
    title: 'Авторизация',
    isLogin: true,
    navlog:true
  })
})

auth.get('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login#login')
  })
})

// auth.post('/login', async (req, res) => {
//   req.session.isAuthenticated = true
//   req.session.save(err => {
//     if (err) {
//       throw err
//     }
//     res.redirect('/')
//   })

  auth.post('/login', async (req, res) => {
  
    try {
      const {email, password} = req.body
      const candidate = await User.findAll({where:{ email }, raw: true })
        
      if (candidate.length > 0) {
       
        const areSame = await bcrypt.compare(password, candidate[0].password)
       
        if (areSame) {
          req.session.user = candidate
          req.session.isAuthenticated = true
          req.session.save(err => {
            if (err) {
              throw err
            }
            res.redirect('/')
          })
        } else {
          // req.flash('loginError', 'Неверный пароль')
          res.redirect('/auth/login#login')
        }
      } else {
        // req.flash('loginError', 'Такого пользователя не существует')
        res.redirect('/auth/login#login')
      }
    } catch (e) {
      console.log(e)
    }
  })
 

auth.post('/register',async (req,res)=>{
  try {
    
    const {email, password,userName} = req.body 
    const candidate = await User.findAll({where:{ email }, raw: true })
   
    if (candidate.length > 0) {
    
     
      res.redirect('/login')
    } else {
      const hashPassword = await bcrypt.hash(password, 10)
      const newUser ={
        email:req.body.email,
        password: hashPassword,
        userName:req.body.userName,
        img:'https://cdn.dribbble.com/users/730703/screenshots/10858109/media/03762d3dac3262515d633503f753bee9.jpg'
      }
     
      
      await User.create(newUser)
      res.redirect('/login')
     
    
  }} catch (error) {
    console.log(error);
    
  }
})
module.exports = auth