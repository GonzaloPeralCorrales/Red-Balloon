const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const customerSchema = new Schema({
            
    username:{
        type:String,
        unique:true,
        required:true,
    },
    passwordHash:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: true,
        unique: true, 
    },
},
{
    timestamps: true
}
); 

module.exports = mongoose.model('Customer',customerSchema)

