console.log("Find and count the Danish letters\n\n")

function findDanishLetters(array1, array2, object) {
    for (let index = 0; index < array2.length; index++) {
        let key = array2[index]
        if (array1.includes(key)) {
            object[key]++;
        }
    }
}

function conditionalDelete(object) {
    for (const key in object) {
        (object[key] === 0 && key !== 'total') 
            ? delete object[key]
            : object['total'] += object[key]
    }
}

function danishAlphabets(string) {
    const letters = { total: 0, æ: 0, ø: 0, å: 0 }
    const danishLetters = ['æ', 'ø', 'å']
    const splitString = string.split("");

    findDanishLetters(danishLetters, splitString, letters);

    conditionalDelete(letters);

    return letters;
}

const danishString = "Jeg har en blå bil";
console.log(danishAlphabets(danishString));

const danishString2 = "Blå grød med røde bær";
console.log(danishAlphabets(danishString2));
