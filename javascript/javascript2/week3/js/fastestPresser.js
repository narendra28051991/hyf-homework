const input = document.getElementById('seconds')
const start = document.getElementById('start')
const scoreS = document.querySelector('.player-S p:nth-child(2)')
const scoreL = document.querySelector('.player-L p:nth-child(2)')
const result = document.getElementById('result')
const timer = document.getElementById('timer')
const reset = document.getElementById('new-game')
const confettiS = document.getElementById('canvas-S');
const confettiL = document.getElementById('canvas-L');

let countS = 0
let countL = 0 

const startGame = () => {
    const input = +document.getElementById('seconds').value
    newGame()
    eventListener()
    countDown(input)
    gameResult(input)
}

const newGame = () => {
    countS = 0
    countL = 0
    scoreS.innerText = ''
    scoreL.innerText = ''
    timer.innerText = ''
    result.innerText = ''
}

const resetGame = () => {
    input.value = ''
    newGame()
}

const eventListener = () => {
    document.addEventListener("keydown", scoreCounter)
}

const scoreCounter = (event) => {
    if (event.key === "s") {
        countS++
        scoreS.innerText = countS
    } else if (event.key === "l") {
        countL++
        scoreL.innerText = countL
    }
}

const countDown = (seconds) => {
    let timeLeft = seconds
    const timeCount = setInterval(() => {
        timeLeft--
        timer.innerText = `${timeLeft} seconds left`
        if (timeLeft === 0) {
            clearInterval(timeCount)
            timer.innerText = 'time up'
        }
        if (timeLeft === -1) {
            clearInterval(timeCount)
            timer.innerText = ''
        }
    }, 1000);
}

const gameResult = (seconds) => {
    setTimeout(() => {
        document.removeEventListener("keydown", scoreCounter)
        if (seconds === 0) {
            result.innerText = 'Please enter the seconds'
        }
        else if (countS === 0 && countL === 0) {
            result.innerText = 'Game over! You did not press a key'
        }
        else if (countS === countL) {
            result.innerText = 'Game over! It is a draw'
            confettiRender('L')
            confettiRender('S')
        }
        else if (countL > countS) {
            result.innerText = "Game over! L is the winner"
            confettiRender('L')
        }
        else {
            result.innerText = "Game over! S is the winner"
            confettiRender('S')
        }
    }, seconds * 1000);
}

const confettiRender = (letter) => {
    const confettiElement = document.getElementById(`canvas-${letter}`);
    const confettiSettings = { target: confettiElement };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => confetti.clear(), 2000);
}

start.addEventListener('click', startGame)
reset.addEventListener('click', resetGame)
