const express = require('express');
const router = express.Router();

const restaurantModel = require('../models/restaurant')

const bookingModel = require('../models/booking')

router.get('/booking', (req, res) => { 
    console.log(req.query)
   
  /*let {date,people} = req.query*/

  
  
    restaurantModel.find({name:req.query.restaurantName})
    
    .then((book)=>{
      console.log(book)
      res.render('booking.hbs', {book})
    })
  
  })
  router.post('/booking', (req, res) => { 
    let {day,people,restaurantName}= req.body
    var book= new bookingModel(req.body)
    book.save()
    
    .then(()=> {
     
      res.redirect('/mybookings')
    })
  
  })

router.get('/mybookings', (req, res) => { 

  bookingModel.find({username:req.session.username})

    .then((bookings)=>{
      
      res.render('mybookings.hbs', {bookings})
    })   
})



module.exports = router;
