const mongoose = require('mongoose');

const dataSchema=new mongoose.Schema({
    imagen:{
        required:true,
        type:String
    },
    nombre:{
        required:true,
        type:String
    },
    vendedor:{
        required:true,
        type:String
    },
    calificacion:{
        required:true,
        type:String
    },
})

module.exports=mongoose.model('Data1',dataSchema);