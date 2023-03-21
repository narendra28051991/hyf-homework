console.log("\n\nPalindromic substring !!\n\n")

function longestPalindrome(firstIndex, secondIndex, array, firstString = "", lastString = "") {
    let prevIndex = firstIndex - 1;
    let nextIndex = secondIndex + 1;
    let palindromeInstance = array.slice(firstIndex, secondIndex + 1).join("");

    while (prevIndex > -1 || nextIndex < array.length) {
        if (array[prevIndex] === array[nextIndex]) {
            firstString = array[prevIndex] + firstString;
            lastString = lastString + array[nextIndex];
            nextIndex++;
            prevIndex--;
        } else break;
    }

    const palindrome = firstString + palindromeInstance + lastString;
    return palindrome;
}

function pushIntoArray(array, element) {
    if (!array.includes(element)) {
        array.push(element);
    }    
}

function filterArray(array) {
    let longest = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index].length > longest) {
            longest = array[index].length;
        }
    }
    let longestArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].length === longest) {
            longestArray.push(array[index]);
        }
    }
    return longestArray;
}

const input = "wattage->abcba->madam->ee->12321->99"
const substrings = []
const stringArray = input.split("");

for (let index = 0; index < stringArray.length; index++) {
    if (stringArray[index] === stringArray[index - 1]) {
        const palindrome = longestPalindrome(index - 1, index, stringArray);
        pushIntoArray(substrings, palindrome);
    }

    if ((stringArray[index] === stringArray[index - 2])) {
        const palindrome = longestPalindrome(index - 2, index, stringArray);
        pushIntoArray(substrings, palindrome);
    }
}

console.log(substrings)

const filteredStrings = filterArray(substrings)
const longestSubstring = filteredStrings.join(", ")

console.log(`Number of longest palindromes: ${filteredStrings.length}\n${longestSubstring}`)
