alert("Midway\nHousey Pricey")
console.log("House Price Estimator!")
const friendName = prompt("Enter your name: ")
const wide = +prompt("Enter the breadth of your house in m: ")
const deep = +prompt("Enter the length of your house in m: ")
const high = +prompt("Enter the height of your house in m: ")
const gardenSize = +prompt("Enter the size of your garden in m2: ")
const cost = +prompt("Enter the cost of your house: ")
const volumeInMeters = wide * deep * high
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSize * 300
console.log(housePrice)
const costDifference = housePrice - cost
if (costDifference < 0) {
    console.log(`${friendName} is paying too much, ${Math.abs(costDifference)} more than the actual cost\n\n`)
} else if (costDifference > 0) {
    console.log(`${friendName} is paying too less, ${costDifference} less than the actual cost\n\n`)
} else {
    console.log(`${friendName} is paying the exact price\n\n`)
}
