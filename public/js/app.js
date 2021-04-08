console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    const location = search.value
    const url = '/weather?address=' + location

    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            } else{
                messageOne.textContent = 'Location: ' + data.location
                messageTwo.textContent = 'Forecast: ' + data.weather_descriptions + '; Temperature: ' + data.temperature + '°C; Feelslike: ' + data.feelslike + '°C'
                messageThree.textContent = 'Wind speed: ' + data.wind_speed + 'km/h; Wind degree: ' + data.wind_degree + '; Wind direction: ' + data.wind_dir
            }
        })
    })
})