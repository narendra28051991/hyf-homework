alert("Welcome to\n\nGoodboy-Oldboy")
console.log("Dog Age Calculator!")
const dogYearOfBirth = +prompt("Enter your dog birth year: ")
const dogYearFuture = 2087
const dogYear = dogYearFuture - dogYearOfBirth
const shouldShowResultInDogYears = prompt("Do you want to see your dogs age in dog years?\nEnter 'Yes' or 'No':")
if (shouldShowResultInDogYears.toLowerCase() === "yes") {
    console.log(`Your dog will be ${dogYear * 7} dog years in ${dogYearFuture}\n\n`)
} else {
    console.log(`Your dog will be ${dogYear} human years in ${dogYearFuture}\n\n`)
}
