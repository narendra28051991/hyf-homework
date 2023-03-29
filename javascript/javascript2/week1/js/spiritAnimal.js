console.log("\n\nSpirit animal name generator\n\n")

const spiritNames = [
    'The Ant',
    'The Alligator',
    'The Anaconda',
    'The Albatross',
    'The Antelope',
    'The Armadillo',
    'The Beaver',
    'The Buffalo',
    'The Bat',
    'The Bear'
]

function eventFunction() {
    const inputValue = document.getElementById('input').value;

    if (inputValue === '' || inputValue === ' ') {
        spiralName.innerHTML = 'Please provide your name !!!';
    }
    else {
        spiralName.innerHTML = `${inputValue}: ${spiritNames[Math.floor(Math.random() * 10)]}`;
    }
}

function selectOption() {
    const option = document.querySelector('input[name=option]:checked').value;

    switch(option) {
        case 'hover':
            input.value = ''
            info.innerHTML = 'Now enter a name and hover in the input field'
            input.removeEventListener('input', eventFunction)
            spiralButton.removeEventListener('click', eventFunction)
            input.addEventListener('mouseover', eventFunction)
            break;
    
        case 'type':
            input.value = ''
            info.innerHTML = 'Now type a name in the input field'
            input.removeEventListener('mouseover', eventFunction)
            spiralButton.removeEventListener('click', eventFunction)
            input.addEventListener('input', eventFunction)
            break;
    
        case 'click':
            input.value = ''
            info.innerHTML = 'Now enter a name and click the Spiral Animal Name'
            input.removeEventListener('mouseover', eventFunction)
            input.removeEventListener('input', eventFunction)
            spiralButton.addEventListener('click', eventFunction)
            break;
    }
}

const options = document.getElementById('options')
const input = document.getElementById('input')
const spiralButton = document.querySelector('.btn')
const newSpiralButton = document.querySelector('.new-btn')
const info = document.querySelector('.info')
const spiralName = document.querySelector('.spiral-name')

info.innerHTML = 'Please select an option to continue'

options.addEventListener('click', selectOption)

newSpiralButton.addEventListener('click', eventFunction)
