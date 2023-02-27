alert("Last but not least\n\nPizza Project")
console.log("I love pizza")
const pizzaName = prompt("Enter the name of your favourite pizza: ")
const pizzaPrice = 50
console.log(`New pizza order: ${pizzaName}. The price of the pizza is: ${pizzaPrice},00 kr.\n\n`)

alert("You can order multiple pizzas and also decide if the pizzas should be family size")
console.log("New order")
const pizzaCount = +prompt("Enter the amount of pizzas you would like to order: ")
const familySizePizza = prompt("Would you like to order a family size pizza?\nEnter 'Yes' or 'No':")
const totalPrice = pizzaPrice * pizzaCount
if (familySizePizza.toLowerCase() === "yes") {
    console.log(`New pizza order: ${pizzaCount} family size pizza ${pizzaName}. Total cost for the order is: ${totalPrice * 2},00 kr.`)
} else {
    console.log(`New pizza order: ${pizzaCount} medium pizza ${pizzaName}. Total cost for the order is: ${totalPrice},00 kr.`)
}
