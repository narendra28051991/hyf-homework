console.log("\n\nCharacter frequencies !!\n\n");

function getCharacterFrequencies(string) {
    const charactersArray = []
    const countsArray = []
    const splitString = string.split("").sort()

    for (let index = 0; index < splitString.length; index++) {
        const characterCount = 1
        if (!charactersArray.includes(splitString[index])) {
            charactersArray.push(splitString[index]);
            countsArray.push(characterCount);
        } else {
            indexOfDuplicate = charactersArray.indexOf(splitString[index]);
            countsArray[indexOfDuplicate] += 1;
        }
    }

    const characters = []

    if (charactersArray.length === countsArray.length) {
        for (let index = 0; index < charactersArray.length; index++) {
            characters.push(
                {
                    character: charactersArray[index],
                    count: countsArray[index]
                }
            );        
        }
    } else {
        console.log("There is an error in the code");
    }

    return characters
}

console.log(getCharacterFrequencies('happy'));
