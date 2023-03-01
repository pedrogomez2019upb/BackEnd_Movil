const mongoose = require('mongoose');

const dataSchema=new mongoose.Schema({
    user:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    favorites:{
        required:true,
        type:String
    },
})

module.exports=mongoose.model('Data2',dataSchema);