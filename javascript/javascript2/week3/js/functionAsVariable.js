// array with functions
const func1 = () => 'first function'
const func2 = () => 'second function'
const func3 = () => 'third function'

const functionsArray = [func1, func2, func3]
functionsArray.forEach(func => console.log(func()))

// function types
function normally() {
    return 'function declaration';
}

const anonymous = function() {
    return 'anonymous function expression';
}

console.log(normally())
console.log(anonymous())

// object value as function
const functionalObject = {
    key: () => 'value is a function'
}
console.log(functionalObject.key())
