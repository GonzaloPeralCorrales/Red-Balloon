const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    email:{
          type: Number,
          unique:true
      },
     name:{
          type:String,
      },
      number:{
          type:Number,
          required:true,
         
      },
      location:{
          city:{
              type:String,
          },
          address:{
          type:String,
          
          } 
      },
      image:{
          type:String,
      },
    dish:[
            {name:String,
            price:Number
            }
          ],
    })

      
    module.exports = mongoose.model('restaurant',restaurantSchema)

    