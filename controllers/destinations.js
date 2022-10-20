const Destinations= require('../model/destinations');

// exports.getDestinationById=(req,res,id,next)=>{
//     console.log(id);
//     Destinations.find({id:id}).exec((err,destin)=>{
//         if(err){
//             return res.json("no destination found")
//         }
//         req.destin=destin;
//     })
// }

exports.createDestination=(req,res)=>{
    const destination=new Destinations(req.body);
    destination.save().then(()=>{
        return res.json("Destination Created")
    })
    .catch(()=>{
        return res.json("Unable to Create Destination .")
    })
}

exports.getDestinations=(req,res)=>{
    Destinations.find().exec((err,destinations)=>{
        if(err){
            return res.json("Unable to find Destinations")
        }
        return res.json(destinations);
    })
}

exports.deleteDestination=(req,res)=>{
    Destinations.deleteOne({_id:req.params.destinationId}).exec((err,success)=>{
        if(err){
            return res.json("Unable to perform delete operation")
        }
        return res.json("Destination deleted successfully..")
    })
}