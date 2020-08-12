const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer:{
      type:Schema.Types.ObjectId,
      ref:"Customer"
    },  
    restaurant:{
        type:String,
       
    },
    dish:[
      {name:String,
      price:Number
      }
    ],
      
    status:{
            type:String,
            required: true,
            enum :['pending','done']
        }
    

)
module.exports = mongoose.model('order',orderSchema)







  

   
      
        
                
        
        
        
            
    


