const express=require('express');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const router=express.Router();
const {getUserBookings,createBookings,getAllBookings,getNameByUserId}=require("../controllers/bookings")

router.get("/user/bookings/:userId",getUserBookings);
router.post("/user/create/booking",createBookings);
router.get("/all/bookings",getAllBookings);



module.exports=router;