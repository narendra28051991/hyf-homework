const image = document.getElementById('image')
const breedName = document.getElementById('name')

// async function getDogs() {
//     try {
//         const dogsResponse = await fetch(
//         "https://dog.ceo/api/breeds/image/random"
//         );
//         const dogs = await dogsResponse.json();
//         image.src = dogs.message;
//         image.style.width = '500px';
//         return dogs;
//     }
//     catch (err) {
//         throw "Fetching the dogs went wrong";
//     }
// }

// getDogs();

// setInterval(getDogs, 2000);

const allDogs = async () => {
    try {
        const dogsResponse = await fetch('https://dog.ceo/api/breeds/list/all');
        const dogs = await dogsResponse.json();
        const allBreeds = Object.keys(dogs.message)
        const randomNumber = Math.floor(Math.random() * allBreeds.length)
        const breedResponse = await fetch(
            `https://dog.ceo/api/breed/${allBreeds[randomNumber - 1]}/images/random`
        );
        const randomDog = await breedResponse.json();
        breedName.innerText = allBreeds[randomNumber - 1]
        image.src = randomDog.message;
        image.style.width = '500px';
        return { dogs, randomDog };
    }
    catch (err) {
        throw "Fetching the dogs went wrong";
    }
}

allDogs()
