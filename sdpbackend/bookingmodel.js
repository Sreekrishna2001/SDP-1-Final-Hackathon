const mongoose=require('mongoose')

const booking= new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    RestaurantName:{
        type:String,
        required:true
    },
    TableNo:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})
const bookshema = mongoose.model('booking',booking)
module.exports=bookshema