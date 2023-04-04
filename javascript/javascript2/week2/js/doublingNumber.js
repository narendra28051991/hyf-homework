console.log("Doubling of number !!\n\n")

const numbers = [1, 2, 3, 4];

const newNumbers = numbers
                    .filter(number => number % 2 !== 0)
                    .map(odd => odd * 2)

console.log("The doubled numbers are", newNumbers);
