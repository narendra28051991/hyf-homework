let variable = 0

// Click counter
const button1 = document.getElementById('one')
const button2 = document.getElementById('two')
const buttons = [button1, button2]

const countUp = () => {
    console.log(variable);
    variable++;
}

buttons.forEach(button => {
    button.addEventListener('click', countUp)    
})

// Delay clicker
const button3 = document.getElementById('delay')

const delayClicker = () => {
    setTimeout(() => {
        console.log('This text was delayed by 3 seconds');
    }, 3000)
}

button3.addEventListener('click', delayClicker)

// Page onload
const callback = () => console.log("DOM fully loaded and parsed")

window.addEventListener('DOMContentLoaded', callback)

// Mouse position
const follower = document.getElementById('mouse-position')

follower.style.position = 'absolute'
follower.style.top = 0
follower.style.left = 0
follower.style.backgroundColor = '#E96479'
follower.style.color = '#F5E9CF'

const coordinates = []

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0)
}

Array.prototype.avg = function() {
    return this.sum() / this.length
}

document.addEventListener('mousemove', (event) => {
    const x_axis = event.clientX
    const y_axis = event.clientY
    follower.innerText = `X: ${x_axis}, Y: ${y_axis}`
    follower.style.left = x_axis + 'px'
    follower.style.top = y_axis + 'px'
    coordinates.push({x: x_axis, y: y_axis})
})

setTimeout(() => {
    console.log(coordinates)
    const avgX = coordinates.map(item => item.x).avg()
    const avgY = coordinates.map(item => item.y).avg()
    console.log(avgX, avgY)
}, 5000)