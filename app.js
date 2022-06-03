const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users');

require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');



const logger = (req,res, next)=>{
    const method = req.method;
    const url = req.url;
    const dateTime = new Date();
    console.log(method, url, dateTime);
    next()
};
app.use(logger);

app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}));
app.use('/users', usersRouter);


app.get('/', (req,res)=>{
    res.render('app');
});

app.listen(PORT, ()=>{
    console.log(`Сервачок запущен по адресу: localhost:${PORT}`);
})