const Bookings =require('../model/bookings')

exports.createBookings=(req,res)=>{
    const booking=new Bookings(req.body);
    booking.save().then(()=>{
        return res.json("Bookings Created")
    })
    .catch((err)=>{
        return res.json(err)
    })
}

exports.getUserBookings=(req,res)=>{
    Bookings.find({userId:req.params.userId}).exec((err,Bookings)=>{
        if(err){
            return res.json("Unable to find Bookings")
        }
        return res.json(Bookings);
    })
}

exports.getAllBookings=(req,res)=>{
    Bookings.find().exec((err,bookings)=>{
        if(err){
            return res.json("Bookings not found")
        }
        return res.json(bookings);
    })
}

