const express=require('express');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { getHotel,createHotel,deleteHotel } = require('../controllers/hotels');
const router=express.Router();


router.get("/destination/:destId/hotels",getHotel);
router.post("/destination/create/hotels",createHotel);
router.delete("/destination/delete/hotel/:hotelId",deleteHotel);



module.exports=router;