require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const getWeather = (req, res) => {
    res.render('weather',{
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
       if(data.cod === '404') {
         res.render('index', {
          city: data.message,
          speed: null,
          id: null,
          temp: null
         });
       } else {
        const city = data.name;
        const speed = data.wind.speed;
        const id = data.id;
        const temp = data.main.temp;
        res.render('weather', {
          city, speed, id, temp
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
