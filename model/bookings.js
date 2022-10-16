const mongoose=require('mongoose')

const bookingSchema=new mongoose.Schema({
    hotel_name:{
        type:String
    },
    adults_count:{
        type:Number,
        default:0
    },
    children_count:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        default:0
    },
    destination:{
        type:String
    },
    userId:{
        type:String
    },
    from:{
        type:Date
    },
    to:{
        type:Date
    }
})

module.exports=mongoose.model('Bookings',bookingSchema)