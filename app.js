//import modules
const express = require('express');
const bodyParser = require('body-parser');
//routers
const usersRouter = require('./routers/users');
const weatherRouter = require('./routers/weather');
//dotenv
require('dotenv').config();
//Начальные переменные
const PORT = process.env.PORT;
const app = express();

//logger
const logger = (req,res, next)=>{
    const method = req.method;
    const url = req.url;
    const dateTime = new Date();
    console.log("Событие: ",method, url, dateTime);
    next()
};

//settings
app.use(logger);
app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}));
app.use('/users', usersRouter);
app.use('/weather',weatherRouter);


app.get('/', (req,res)=>{
    res.render('app');
});

app.listen(PORT, ()=>{
    console.log(`Сервачок запущен по адресу: http://localhost:${PORT}`);
})