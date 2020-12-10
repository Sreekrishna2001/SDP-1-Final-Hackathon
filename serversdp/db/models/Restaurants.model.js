const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    RestaurantName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    Rating:{
        type:String,
        required:true
    },
    URL:{
        type:String,
        required:true
    },
    Info:{
    type:String,
    required:true
    },
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
    

})

const List = mongoose.model('List', ListSchema);

module.exports = { List }