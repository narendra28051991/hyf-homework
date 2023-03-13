console.log("\nWhen will we be there??\n\n");

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const timeToDestination = function (object) {
    const timeToTravel = (object.destinationDistance / object.speed).toString();
    if (timeToTravel.includes('.')) {
        const timeToDestination = timeToTravel.split('.')
        const hoursToDestination = +timeToDestination[0];
        const remainingTime = +timeToDestination[1];
        const minutesToDestination = Math.floor(remainingTime * 60 / 100);
        const timeToArrive = `${hoursToDestination} hours and ${minutesToDestination} minutes`;
        return timeToArrive;
    }
    else {
        return `${timeToTravel} hours`;
    }
}

const travelTime = timeToDestination(travelInformation);
console.log(travelTime);
