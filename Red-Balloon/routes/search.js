const express = require('express');
const router = express.Router();


const restauranteModel = require('../models/restaurant')


router.get('/search', (req, res) => {
    
   
    let {city,name} = req.query
    if(city !== "" && name !== ""){
    
    restauranteModel.find().where('name').equals(name).where('location.city').equals(city)
    .then((info)=>{
        console.log(info)
        res.render('search.hbs', {info})
    }
    )}
    if(city == "" && name !== ""){
    
        restauranteModel.find().where('name').equals(name)
        .then((info)=>{
            console.log(info)
            res.render('search.hbs', {info})
        }
        )}
        if(city !== "" && name == ""){
    
            restauranteModel.find().where('location.city').equals(city)
            .then((info)=>{
                console.log(info)
                res.render('search.hbs', {info})
            }
            )}


})


router.get('/myorders', (req, res) => {
    res.render('myorders.hbs')
})

router.post('/myorders', (req, res, next) => {
    
    res.render('myorders.hbs')
})  
module.exports = router;