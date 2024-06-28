require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const getWeather = (req, res) => {
    res.render('weather',{
      cod: null,
      error: null,
      city: null,
      speed: null,
      id: null,
      temp: null
    });
}

const postWeather = async (req, res) => {
    const city = req.body.city;
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;
  
    try {
      await fetch(url_api)
      .then(res => res.json())
      .then(data => {
       if(data.cod === '400' || data.cod === '404') {
         const cod = data.cod;
         const error = data.message;
         const city = null;
         const speed = null;
         const id = null;
         const temp = null;
         res.render('weather', {
          cod, error ,city, speed, id, temp
        });
        
       } else {
        const cod = null;
        const error = null;
        const city = data.name;
        const speed = data.wind.speed;
        const id = data.id;
        const temp = data.main.temp;
        res.render('weather', {
          cod, error, city, speed, id, temp
        });
       }
    })
  } catch(err) {
      res.render('weather', {
        city: 'Something wrong',
        mint: null,
        id: null,
        temp: null
      })
    }
    console.log(url_api)
}

module.exports = { getWeather, postWeather }
