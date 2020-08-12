const express = require('express');
const router = express.Router();

const restaurantModel = require('../models/restaurant')


router.get('/order', (req, res) => { 
       
restaurantModel.find({name:req.query.restaurantName})
        .then((order)=>{
            res.render('order.hbs', {order})
          })
})

module.exports = router;


