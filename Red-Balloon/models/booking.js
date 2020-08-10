const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const bookingSchema = new Schema({
    username:{
        type:String,
       
    },
    name:{
        type:String,
      
    },
    date:{
        type: Date,
        required:true
    },
    people:{
        type:Number,
        required: true,
    }
   
})


    module.exports = mongoose.model('booking',bookingSchema)

