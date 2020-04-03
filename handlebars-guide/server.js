const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan')
const path = require('path')
const sequelize = require('./server/config/index')
const favicon = require('express-favicon');
const errorhendler = require('./server/midlwers/err_404')


const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(favicon(__dirname + './public/favicon.ico'));

// Routes
app.use('/', require('./server/routes/root'))
app.use('/api',require('./server/routes/edit'))
app.use('/delete',require('./server/routes/delate'))
app.use('/posts',require('./server/routes/posts'))
app.use('/comments',require('./server/routes/coments'))
app.use('/admin',require('./server/routes/admin'))


app.get('/test', (req, res) => {
  res.render('index');
});

app.use(errorhendler)

//{force: true}
sequelize.sync().then(()=>{
  app.listen(port, function(){
    console.log("Сервер ожидает подключения... 3000");
  });
}).catch(err=>console.log(err));