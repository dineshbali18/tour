const express=require('express');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const router=express.Router();

const {getDestinationById,createDestination,getDestinations,deleteDestination} =require("../controllers/destinations")


router.post("/admin/create/destination",createDestination);
router.get("/destinations",getDestinations);
router.delete("/admin/delete/destinations/:destinationId",deleteDestination);

module.exports=router;