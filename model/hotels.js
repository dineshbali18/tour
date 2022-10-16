const mongoose=require('mongoose')

const hotelSchema=new mongoose.Schema({
    hotelname:{
        type:String
    },
    adultPrice:{
        type:Number
    },
    childPrice:{
        type:Number
    },
    img:{
        type:[String]
    },
    hotel_destination:{
        type:String
    },
    max_people:{
        type:Number
    },
    hotel_description:{
        type:String
    }
})

module.exports=mongoose.model('Hotel',hotelSchema);
