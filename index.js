const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json());

//CONEXION A BASE DE DATOS

const mongoString=process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database=mongoose.connection;

database.on('error',(error)=>{
    console.log(error);
})

database.once('connected',()=>{
    console.log('Base de datos conectada');
})

//Importacion rutas
//const routes=require('./routes/routes');
const routesArticles=require('./routes/routesArticles');
const routesUser=require('./routes/routesUser');
//const routesJWT=require('./routes/routesJWT');
//const routes=require('./view/view');
app.use('/articles',routesArticles);
app.use('/user',routesUser);
//app.use('/login',routesJWT);

app.listen(process.env.PORT || 3005)