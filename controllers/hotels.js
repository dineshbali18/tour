const Hotel= require('../model/hotels');

exports.createHotel=(req,res)=>{
    const hotel=new Hotel(req.body);
    hotel.save().then(()=>{
        return res.json("hotel Created")
    })
    .catch(()=>{
        return res.json("Unable to Create hotel .")
    })
}

exports.getHotel=(req,res)=>{
    Hotel.find({hotel_destination:req.params.destId}).exec((err,Hotel)=>{
        if(err){
            return res.json("Unable to find Hotel")
        }
        return res.json(Hotel);
    })
}

exports.deleteHotel=(req,res)=>{
    Hotel.deleteOne({id:req.params.hotelId}).exec((err,success)=>{
        if(err){
            return res.json("Unable to perform delete operation")
        }
        return res.json("hotel deleted successfully..")
    })
}