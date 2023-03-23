console.log("\n\nVoice Assistant !!\n\n")

const properties = {
    name: '',
    todos: [],
    date: ''
}

function registerName(array) {
    const name = array[array.length - 1];
    properties['name'] = name;
    return `Nice to meet you ${properties.name}`;
}

function getName() {
    return properties.name !== '' ? `Your name is ${properties.name}` : 'You have not entered name yet !!'
}

function addTodo(array) {
    if (array.includes("fishing")) {
        properties['todos'].push('fishing');
        return 'fishing added to your todo list';
    }
    else if (array.includes("singing")) {
        properties['todos'].push('singing in the shower');
        return 'singing in the shower added to your todo list';
    }
}

function removeTodo(array) {
    if (array.includes("fishing")) {
        properties['todos'].splice(properties['todos'].indexOf('fishing'), 1);
        return 'fishing removed from your todo list';
    }
    else if (array.includes("singing")) {
        properties['todos'].splice(properties['todos'].indexOf('singing in the shower'), 1);
        return 'singing in the shower removed from your todo list';
    }
}

function printTodo() {
    return properties['todos'] !== []
        ? `You have ${properties['todos'].length} todos: ${properties['todos'].join(", ")}`
        : 'There are no todos added to the list !!';
}

function getDate(array) {
    if (array.includes("today?")) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        properties['date'] = new Date().toLocaleDateString("en-GB", options);
        return `Date: ${properties.date}`;
    }
}

function setTimer(array) {
    const time = array[array.length - 2];
    console.log(`Timer set for ${time} seconds`);
    setTimeout(() => {
        console.log("Timer completed");
    }, (time * 1000));
}

function simpleMath(array) {
    const slicedArray = array.slice(2);
    const joinedArray = slicedArray.join(" ")
    const solution = eval(joinedArray);
    return `Solution for ${joinedArray}: ${solution}`;
}

function defaultCases(action, array) {
    switch (action) {
        case 'What is my name':
            console.log(getName());
            break;

        case 'Add fishing to my todo':
            console.log(addTodo(array));
            break;
    
        case 'Add singing in the shower to my todo':
            console.log(addTodo(array));            
            break;
    
        case 'What is on my todo?':
            console.log(printTodo(array));
            break;
    
        case 'Remove fishing from my todo':
            console.log(removeTodo(array));
            break;

        case 'Remove singing in the shower from my todo':
            console.log(removeTodo(array));
            break;
        
        case 'What day is it today?':
            console.log(getDate(array));
            break;
    
        case 'What is on my todo?':
            console.log(printTodo());
            break;

        default:
            console.log('Please enter the correct command !!');
            break;
    }
}

function getReply(command) {
    const commandArray = command.split(" ");
    
    if (commandArray.includes("Hello")) {
        console.log(registerName(commandArray));
    }
    else if (commandArray.includes("what")) {
        console.log(simpleMath(commandArray));
    }
    else if (commandArray.includes("timer")) {
        setTimer(commandArray);
    }
    else {
        defaultCases(command, commandArray);
    }
}

getReply("Hello my name is Benjamin")
getReply("What is my name")
getReply("Add fishing to my todo")
getReply("Add singing in the shower to my todo")
getReply("What is on my todo?")
getReply("Remove singing in the shower from my todo")
getReply("What day is it today?")
getReply("what is 3 + 3")
getReply("Set a timer for 5 seconds")

console.log(properties)
