const mongoose=require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express();
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb+srv://user:12345@cluster0.pl79v.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("DB connected")
})
.catch(()=>{
    console.log("Unable to connect to DB")
})


const authRoutes=require("./routes/auth")
const destinRoutes=require("./routes/destinations")
const hotelRoutes=require("./routes/hotels")
const bookingRoutes=require("./routes/bookings")

app.use("/api",authRoutes)
app.use("/api",destinRoutes)
app.use("/api",hotelRoutes)
app.use("/api",bookingRoutes)

var PORT=9999;
app.listen(PORT,(req,res)=>{
    console.log("server is running .....")
})

