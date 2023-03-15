const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
window.addEventListener('load', async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=a77a0f5546d3b26a82d495ad732785f9`
    let res = await fetch(url)
    let data = await res.json()
    haze = data.weather[0].main
    icon = data.weather[0].icon
    let day = weekday[d.getDay()];
    let mon = month[d.getMonth()];
    let min = d.getMinutes()
    let hour = d.getHours()


    city = data.name
    country = data.sys.country

    let weather = document.querySelector('.weather-inputs')
    weather.innerHTML = `
<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt=${country} />
<h5 class="haze">${haze}, ${country} </h5>
<span>${day} | ${mon} |${hour} : ${min}</span>

    <h5 class="city">City : ${city}</h5>
    `
})

async function getWeather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a77a0f5546d3b26a82d495ad732785f9`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    return showWeather(data)
}


function showWeather(data) {
    haze = data.weather[0].main
    city = data.name
    country = data.sys.country
    icon = data.weather[0].icon
    let day = weekday[d.getDay()];
    let mon = month[d.getMonth()];
    let min = d.getMinutes()
    let hour = d.getHours()

   


    let weather = document.querySelector('.weather-inputs')
    weather.innerHTML =  `
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt=${country} />
    <h5 class="haze">${haze}, ${country} </h5>
    <span>${day} | ${mon} |${hour} : ${min}</span>
    
        <h5 class="city">City : ${city}</h5>
        `
}



let input = document.querySelector('.inputs')
input.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        getWeather(input.value)
        input.value = ''
    }
})