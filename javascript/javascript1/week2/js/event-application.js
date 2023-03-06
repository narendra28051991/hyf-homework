alert("Welcome to\n\nevent-application")
console.log("Event application!")

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getEventWeekday(daysFromToday) {
    const today = new Date();
    const eventDay = (today.getDay() + daysFromToday) % 7;
    const eventWeekday = weekday[eventDay];
    return `Today is ${weekday[today.getDay()]} and the event is in ${daysFromToday} days.\nTherefore the event will be held on a ${eventWeekday}.\n\n`
}
console.log(getEventWeekday(23));
