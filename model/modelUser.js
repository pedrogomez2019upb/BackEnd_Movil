const mongoose = require('mongoose');

const dataSchema=new mongoose.Schema({
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    foto:{
        required:true,
        type:String
    },
    nombreCompleto:{
        required:true,
        type:String
    },
    numeroTelefonico:{
        required:true,
        type:String
    },
    cargo:{
        required:true,
        type:String
    },
    fcm:{
        required:true,
        type:String
    },
})
module.exports=mongoose.model('Data2',dataSchema);