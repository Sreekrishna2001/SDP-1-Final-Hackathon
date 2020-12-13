const mongoose=require('mongoose')
const ReviewsSchema=new mongoose.Schema({
    Username:{
    type:String,
    require:true
    },
    Review:{
        type:String,
        require:true
    }
});

const review = {
    Username:{
        type:String,
    },
    Review:{
        type:String,
    }
}

const RestaurantSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Rating:{
        type:String
    },
    Url:{
        type:String,
        required:true
    },
    Info:{
        type:String
    },
    LocationInfo:{
        type:String
    },
    Timings:{
        type:String
    },
    officialurl:{
        type:String,
        required:true
    },
    Review:[review]

}
)
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
// const Review=mongoose.model('Review',ReviewsSchema)
module.exports=Restaurant

