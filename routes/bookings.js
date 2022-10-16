const express=require('express');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const router=express.Router();
const {getUserBookings,createBookings}=require("../controllers/bookings")

router.get("/user/bookings/:userId",getUserBookings);
router.post("/user/create/booking",createBookings);


module.exports=router;