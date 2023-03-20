console.log("\n\nCredit card number formatter !!\n\n");

const formattedCreditCardObject = formatCreditCardNumber(123456789);

function formatCreditCardNumber(number) {
    const splitNumber = String(number).split("");

    for (let index = 0; index < splitNumber.length; index++) {
        const specificIndex = index + 1;
        if ((index > 0) && (specificIndex % 4 === 0)) {
            splitNumber[index] = splitNumber[index] + " ";
        }
    }

    const formattedNumber = splitNumber.join("");
    
    return {
        original: number,
        formatted: formattedNumber
    };
}

console.log(formattedCreditCardObject);
