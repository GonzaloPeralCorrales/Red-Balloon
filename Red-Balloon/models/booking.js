const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const bookingSchema = new Schema({
    user:{
        type:String,
        ref:userModel
    },
    business:{
        type:String,
        ref:businessModel
    },
    date:{
        type: Date,
        required:true
    },
    people:{
        type:Number,
        required: true,
    }
   
    )}


    module.exports = mongoose.model('booking',bookingSchema)

