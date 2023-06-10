const numbers = process.argv.slice(2);

if (numbers.length > 0) {
    const isNotNumber = numbers.find(each => isNaN(+each) === true);
    isNotNumber
            ? console.log('Input should be a number')
            : console.log( numbers.reduce((a, b) => +a + +b) / numbers.length );
}
else {
    console.log('Enter numbers to get the average')
}
