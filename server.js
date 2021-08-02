//'use strict'
const { request, response } = require('express');
const express = require('express');
const server =express();
const cors=require('cors');

const weather= require('./data/weather.json');

const PORT = 3001;

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
      
    let sendArr=[weatherOfcity.city_name,weatherOfcity.lat,weatherOfcity.lon];
    
    response.send(sendArr);
    

    // response.send(weatherOfcity.city_name,);
    // response.send(weatherOfcity.lat);
    // response.send(weatherOfcity.lon);
});


server.use(cors());

server.get('*',(request,response)=>{
    response.status.send('NOT FOUND');

});




server.listen(PORT,()=>
{
console.log('I am listening from PORT 3001');
});


