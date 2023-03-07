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
        return "You can buy more, so please do!";
    } else {
        return "Enough candy for you!";
    }
}

alert("Note!\nPlease order the candies in grams!!");
console.log("Your purchase:");
const sweet = +prompt("Sweet candy:");
addCandy("Sweet", sweet)
const chocolate = +prompt("Chocolate candy:");
addCandy("Chocolate", chocolate)
const toffee = +prompt("Toffee candy:");
addCandy("Toffee", toffee)
const chewing_gum = +prompt("Chewing-gum candy:");
addCandy("Chewing-gum", chewing_gum)
console.log(canBuyMoreCandy())
