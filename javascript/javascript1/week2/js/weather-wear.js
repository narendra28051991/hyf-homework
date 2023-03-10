alert("Midway\n\nweather-wear")
console.log("Weather wear!")

function weatherWear(temperature) {
    if (temperature <= 0) {
        return "Winter jacket";
    } else if (temperature > 0 && temperature <= 10) {
        return "Light to medium coat";
    } else if (temperature > 10 && temperature <= 20) {
        return "Fleece";
    } else if (temperature > 20 && temperature <= 30) {
        return "Short sleeves";
    } else {
        return "shorts";
    }
}

const weatherOutside = +prompt("What is the temperature outside?");
console.log(`It's ${weatherWear(weatherOutside)} weather in Denmark.\n\n`);
