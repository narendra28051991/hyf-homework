alert("Last but not least\n\ncandy-helper")
console.log("\n\nCandy helper!")

let boughtCandyPrices = []

function addCandy(candyType, weight) {
    console.log(`${weight}gm of ${candyType}`);
    switch(candyType) {
        case 'Sweet':
            boughtCandyPrices.push(weight * 0.5);
            break;
        case 'Chocolate':
            boughtCandyPrices.push(weight * 0.7);
            break;
        case 'Toffee':
            boughtCandyPrices.push(weight * 1.1);
            break;
        case 'Chewing-gum':
            boughtCandyPrices.push(weight * 0.03);
            break;
    }
}

const amountToSpend = Math.floor(Math.random() * 100)

function canBuyMoreCandy() {
    let amountRemaining = 0

    for(let candy = 0; candy < boughtCandyPrices.length; candy++) {
        amountRemaining += boughtCandyPrices[candy];
    }

    if (amountRemaining > amountToSpend) {
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!")
    }
}

console.log("Your purchase:")
addCandy("Toffee", 500)
addCandy("Sweet", 500)
canBuyMoreCandy()
