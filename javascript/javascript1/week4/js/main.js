// Fibonacci Sequence

console.log("Fibonacci Sequence !!\n\n")

function fib(num) {
    const fibArray = []

    for (let index = 0; index < 10; index++) {
        if (index < 2) {
            fibArray.push(index);
        } else {
            let fibNum = fibArray[index - 2] + fibArray[index - 1];
            fibArray.push(fibNum);
        }
    }

    console.log(fibArray[num - 1]);
}

fib(5);
fib(10);

// Fizz Buzz

console.log("\n\nFizz Buzz !!\n\n")
function fizzBuzz(num1, num2) {
    for (let index = num1; index <= num2; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if (index % 3 === 0) {
            console.log("Fizz")
        }
        else if (index % 5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(index)    
        }
    }
}

fizzBuzz(4, 12);

// Build a sentiment analyzer

console.log("\n\nSentiment Analyzer !!\n\n")
const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

function getSentimentScore(string) {
    const positiveStrings = ['happy', 'awesome', 'super']
    const negativeStrings = ['boring']
    const stringArray = string.split(" ");
    const positive = [];
    const negative = [];
    let scoreOfWords = 0;

    for (let index = 0; index < stringArray.length; index++) {
        if (positiveStrings.includes(stringArray[index])) {
            positive.push(stringArray[index])
        }
        else if (negativeStrings.includes(stringArray[index])) {
            negative.push(stringArray[index])
        }
    }

    (positive.length > negative.length) ? scoreOfWords = positive.length : scoreOfWords = negative.length;

    return {
        score: scoreOfWords,
        positiveWords: positive,
        negativeWords: negative
    }
}

console.log(sentimentScoreObject);
