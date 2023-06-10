const numbers = process.argv.slice(2);

if (numbers.length > 0) {
    const sum = numbers.reduce((a, b) => +a + +b);

    numbers && isNaN(sum) ? console.log('Input should be a number') : console.log( sum / numbers.length );        
}
else {
    console.log('Enter numbers to get the average')
}
