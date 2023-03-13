console.log("Item array removal\n");

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";
const indexToRemove = names.indexOf(nameToRemove);
names.splice(indexToRemove, 1);
console.log(names);
