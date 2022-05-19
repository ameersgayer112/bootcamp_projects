const express = require('express')

const router = express.Router()
const axios = require('axios').default

const API_key = 'f5806be66aa72b39ac7f35e741cc62f7'


const City = require('../models/City')

router.get('/city/:cityName',function(request,response){

    let cityName = request.params.cityName

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`)
    .then(res  => {

        response.status(200).send(res.data)


    }).catch(err => {

        response.status(400).send('Error with get City Data from API')

    })

})

router.get('/cities',function(request,response){
    City.find({},function(err,cities){
        if(err){
            response.status(404).send('Error with geting cities from DB')
        }

        response.status(200).send(cities)
        response.end()
    })
})

router.post('/city',function(request,response){
    const cityData = request.body
    const newCity = new City({
        name: cityData.name,
        temperature:cityData.temperature,
        condition: cityData.condition,
        conditionPic: cityData.conditionPic
    })
    newCity.save(function(err) {
        if (err) {
          if (err.name === 'MongoError' && err.code === 11000) {
            return response.status(422).send({ succes: false, message: 'City already exist!' });
          }
    
          // Some other error
          return response.status(422).send(err);
        }
    
        response.status(201).send(newCity)
      });    
})

router.delete('/city/:cityName',function(request,response){
    const cityName = request.params.cityName
    City.deleteOne({name:cityName},function(err,city){

        if(err)
        {
            response.status(400).send(`Error on deleting ${cityName}`)

        }
        response.status(204).send(`${cityName} deleted successfuly`)

    })

})



module.exports = router