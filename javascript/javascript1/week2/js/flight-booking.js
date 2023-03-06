alert("Let us start with\n\nflight-booking")
console.log("Flight booking fullname function!")
function getFullname(firstname, surname, person, useFormalname = true) {
    if (useFormalname === true) {
        return person === "men" ? `Lord ${firstname} ${surname}` : `Lordess ${firstname} ${surname}`;
    } else {
        return `${firstname} ${surname}`;
    }
}
console.log(`Your full name is:\n${getFullname("fullname1", "fullname2", "women")}\n\n`);
