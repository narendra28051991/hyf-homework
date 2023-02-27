alert("Getting closer\n\nEz Namey")
console.log("Startup Name Generator!")
const firstWords = ['Courageous', 'Daring', 'Bold', 'Heroic', 'Adventurous', 'Gritty', 'Fearless', 'Resolute', 'Gallant', 'Gutsy']
const secondWords = ['Darkflow', 'Swiftbeat', 'Crimsonlock', 'Bulletflow', 'Deathshadow', 'Hollowshot', 'Rapidflake', 'Ghostsaw', 'Lethalkill', 'Bokken']
const randomNumberFirst = Math.floor(Math.random() * 10)
const randomNumberSecond = Math.floor(Math.random() * 10)
const startupName = `${firstWords[randomNumberFirst]} ${secondWords[randomNumberSecond]}`
console.log(`The startup: ${startupName} contains ${startupName.length} characters\n\n`)
