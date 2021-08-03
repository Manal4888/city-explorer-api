//'use strict'

const express = require('express');
const server =express();
const cors=require('cors');
require('dotenv').config;
const weather= require('./data/weather.json');

const PORT =3001;
// const PORT = process.env.PORT;
server.use(cors());

// URl=http://localhost:3001/data/weather


// server.get('/data/weather',(request,response) => {

//     let weatherinfo = weather.map(item => {
//         return item.city_name;
//     })
//     response.send(weatherinfo.);
// })

// url=http://localhost:3001/data/weather?name=Amman
server.get('/data/weather',(request,response) => {
   
    const name =request.query.name;

    let weatherOfcity = weather.find(item => {
     if (item.city_name ==  name )
   
     return item;
    });
      

 response.send(weatherOfcity);
   
});








server.get('*',(request,response)=>{
    response.status(500).send('Something went wrong');

});




server.listen(PORT,()=>
{
console.log('I am listening from PORT 3001');
});


