const {Router} = require('express')
const auth = Router()

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

auth.post('/login', async (req, res) => {
  req.session.isAuthenticated = true
 
  
  res.redirect('/')
})

module.exports = auth