const express = require('express');
const fetch = require('node-fetch');


const getBrand = (req, res) => {
    res.render('cars', {
        count:null,
        results:null
    });
}

const postBrand = async (req, res) => {
    const brand = req.body.brand;
    const url_api = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${brand}?format=json`;
    console.log(url_api);
  
    try {
      await fetch(url_api)
        .then(res => res.json())
        .then(data => {
            if(data.Count === 0) {
                res.render('cars', {
                    count: data.Message,
                    results: null
                })
            } else {
                const count = data.Count;
                const results = data.Results;
                res.render('cars', {
                    count, results
                });
            }
        })
  } catch(err) {
      res.render('cars', {
        cars: null
      })
    }
}

module.exports = { getBrand, postBrand }
