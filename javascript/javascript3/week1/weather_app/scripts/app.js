const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const button = document.querySelector('button')

const updateUI = (data) => {
  // destructure properties
  const { cityDets, weather } = data
  
  // update details template
  updateText({ cityDets, weather })

  // update the night/day & icon images
  const iconSrc = `img/icons/${weather.weather[0].icon}.svg`
  icon.setAttribute('src', iconSrc)
  
  const timeSrc = weather.weather[0].icon.includes('d') ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc)

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
  }
}

const getTime = (timezone, sunlight) => new Date((timezone + sunlight) * 1000).toUTCString().substring(17, 22);

const updateCity = async (city) => {

  try {
    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.lat, cityDets.lon)
    
    updateUI({ cityDets, weather })

    return { cityDets, weather };
  }
  catch (error) {
    card.classList.add('d-none')
    console.log(error)
  }

};

const updateText = ({ cityDets, weather }) => {

  const cityDetails = document.querySelector('.details h5')
  const howClowdy = document.querySelector('.details div.my-3 span:nth-child(1)')
  const description = document.querySelector('.details div.my-3 span:nth-child(2)')
  const temperaure = document.querySelector('.details div.display-4.my-4 span:nth-child(1)')
  const windSpeed = document.querySelector('.details h3')
  const sunrise = document.querySelector('.details div.display-5.my-3 p:nth-child(1)')
  const sunset = document.querySelector('.details div.display-5.my-3 p:nth-child(2)')

  cityDetails.innerText = cityDets.name
  howClowdy.innerText =  `${weather.clouds.all} % cloudy,`
  description.innerText = weather.weather[0].description
  temperaure.innerText = weather.main.temp
  windSpeed.innerText = `wind: ${weather.wind.speed} mph`
  sunrise.innerText = `sunrise: ${getTime(weather.timezone, weather.sys.sunrise)}`
  sunset.innerText = `Sunset: ${getTime(weather.timezone, weather.sys.sunset)}`

}

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault()
  
  // get city value
  const city = cityForm.city.value
  cityForm.reset()

  // update the ui with new city
  updateCity(city)

  // set local storage
  localStorage.setItem('city', city)
})

button.addEventListener('click', () => {
  
  const successCallback = async (position) => {
    // get current location
    const location = await getLocation(position.coords.latitude, position.coords.longitude)

    // get city value
    const city = location.name
    cityForm.reset()

    // update the ui with new city
    updateCity(city)
  
    // set local storage
    localStorage.setItem('city', city)  
  }
  
  const errorCallback = (error) => console.log(error)

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

})

if (localStorage.getItem('city')){
  updateCity(localStorage.getItem('city'))
}
