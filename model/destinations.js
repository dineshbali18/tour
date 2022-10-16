const mongoose=require('mongoose')
const destinationsSchema=new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String
    }
})

module.exports=mongoose.model('Destination',destinationsSchema);