const mongoose=require('mongoose')
const { v4: uuidv4 } = require('uuid');
const crypto =require('crypto')

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    encry_password:{
        type:String
    },
    salt:String,
    role:{
        type:Number,
        default:0
    }
})

userSchema.virtual("password").set(function(password){
    this.salt=uuidv4();
    this._password=password;
    this.encry_password=this.securePassword(password);
})
.get(function(){
    return this._password;
})

userSchema.methods={
    authenticate: function(plainPassword){
        return this.encry_password===this.securePassword(plainPassword);

},

securePassword: function(plainPassword){
    if(!plainPassword) return "";
    try{
        return crypto.createHmac("sha256",this.salt)
        .update(plainPassword).digest("hex");
    }
    catch(err){
        return "";
    }
}
};


module.exports=mongoose.model('User',userSchema)