// Called after 2.5 seconds
setTimeout(() => console.log('Called after 2.5 seconds'), 2500);

// function with two parameters
const functionWithParameters = (delay, stringToLog) => {
    setTimeout(() => console.log(`${stringToLog} is logged after ${delay} seconds`), delay * 1000);
}
functionWithParameters(3, 'Three')

// click delayed by 5 seconds
const button = document.getElementById('button')
const delayButton = () => {
    setTimeout(() => console.log('Called after 5 seconds'), 5000);
}
button.addEventListener('click', delayButton)

// earth & saturn logger
const earthLogger = () => console.log('Earth')
const saturnLogger = () => console.log('Saturn')
const planetLogFunction = (func) => func()
planetLogFunction(earthLogger)
planetLogFunction(saturnLogger)

// latitude and longitude
const myLocation = document.getElementById('location')
const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const link = document.getElementById('link')
const logLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        latitude.innerText = `This is the latitude ${position.coords.latitude}`
        longitude.innerText = `This is the longitude ${position.coords.longitude}`
        link.innerText = 'Open Street Maps'
        link.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
    })
}
myLocation.addEventListener('click', logLocation)

// delay and callback
const runAfterDelay = (delay, callback) => {
    setTimeout(() => callback(), delay * 1000);
}
runAfterDelay(4, () => console.log('should be logged after 4 seconds'))

// double click
window.addEventListener('dblclick', () => {
    console.log("double click!")
})

// joke creator
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    return shouldTellFunnyJoke === true ? logFunnyJoke() : logBadJoke()
}
jokeCreator(true, () => console.log('funny joke'), () => console.log('bad joke'))
jokeCreator(false, () => console.log('funny joke'), () => console.log('bad joke'))