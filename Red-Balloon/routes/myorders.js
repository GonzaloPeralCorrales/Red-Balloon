/*const express = require('express');
const router  = express.Router();


const Order = require('../models/order')
const Restaurant = require('../models/o')

router.get('/myorders', (req, res) => {
    res.render('myorders.hbs')
})
router.post('/myorders/:id, (req, res, next) => {    
Order.findById(req.params.id)
.then((order)=> {
    res.render('myorders.hbs',{order})
})
Order.updateOne()

})








module.exports = router;*/