const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4413ea1669a889817096aab182310c4a&query=' + latitude + ','+ longitude + '&units=m'

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!.', undefined)
        } else if (body.error){
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                weather_descriptions: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                wind_speed: body.current.wind_speed,
                wind_degree: body.current.wind_degree,
                wind_dir: body.current.wind_dir
            })
        }
    })
}

module.exports = forecast