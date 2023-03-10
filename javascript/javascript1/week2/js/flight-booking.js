alert("Let us start with\n\nflight-booking")
console.log("Flight booking fullname function!")
function getFullname(firstname, surname, person, useFormalname = true) {
    if (firstname === "" || surname === "" || person === "") {
        return 'Please enter the correct details again!';
    } else if (useFormalname === true) {
        return person === "m" ? `Lord ${firstname} ${surname}` : `Lordess ${firstname} ${surname}`;
    }
    else {
        return `${firstname} ${surname}`;
    }
}

const fullname1 = prompt("Enter your first name:");
const fullname2 = prompt("Enter your last name:");
const gender = prompt("Enter your sex (M/F):");
console.log(`Your full name is:\n${getFullname(fullname1, fullname2, gender.toLowerCase())}\n\n`);
