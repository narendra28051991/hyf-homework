// Classroom
/* 
console.log(
    new Promise((resolve, reject) => {
        resolve('Hello')
    })
)

const waitSeconds = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`waited ${n} seconds`), 1000 * n);
    })
}

const waitFunction = async () => {
    const message = await waitSeconds(5)
    console.log(message)
}

waitFunction()
*/

// Exercise - 4

// YesNoFail4Seconds should wait 4 seconds before it does one of the following 3 things:
// resolves with a yes
// resolves with a no
// or rejects
// Look into Math.random()

/* 
const waitFourSeconds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor( Math.random() * 3 ) + 1
            if (randomNumber === 1) {
                resolve('yes')
            } else if (randomNumber === 2) {
                resolve('no')
            } else {
                reject('This is rejected')
            }
        }, 4000);
    })
}

const YesNoFail4Seconds = async () => {
    const result = await waitFourSeconds()
    return result
}


YesNoFail4Seconds()
  .then((data) => {
    console.log(`The answer is ${data}`);
  })
  .catch((error) => {
    console.error(error);
  });
*/

// Exercise - 5

async function getAstronauts() {
    try {
        const astronautsResponse = await fetch(
        "http://api.open-notify.org/astros.json"
        );
        const astronauts = await astronautsResponse.json();
        return astronauts;
    }
    catch (err) {
        throw "Fetchin the astronauts went wrong";
    }
}

const astronauts = getAstronauts();

async function getMovies() {
    try {
        const moviesResponse = await fetch(
        "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
        );
        console.log(moviesResponse)
        const movies = await moviesResponse.json();
        console.log(movies)
        await navigator.getBattery()
            .then(function(battery) {

                // Get current battery level .
                var batteryLevel = battery.level * 100;
                console.log(batteryLevel);
            })
            .catch(function(e) {
                console.error(e);
            });
        return movies;
    }
    catch (err) {
        throw "Fetchin the movies went wrong";
    }
}

const movies = getMovies();

