// CONDITIONS
const balance = 1000;
if (balance <= 0) {
    console.log("Please deposit some money!");
} else if (balance > 0 && balance <= 1000) {
    console.log("Your balance is looking okay");
} else if (balance > 1000 && balance <= 3000) {
    console.log("Your balance is looking good");
} else if (balance > 3000 && balance <= 10000) {
    console.log("Your balance is fantastic");
} else {
    console.log("Your balance is AMAZING!");
}

// TERNARY OPERATOR
const a = 1;
const b = 2;
let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result);

// FOR LOOP
for (let i = 74; i <= 98; i++) {
    console.log(i);
}

// FUNCTIONS
function getCircleArea(radius) {
    return Math.PI * (radius ** 2);
}
console.log(getCircleArea(5));

function celsiusToFahreneit(celcius) {
    return celcius * 1.8;
}
console.log(celsiusToFahreneit(25));