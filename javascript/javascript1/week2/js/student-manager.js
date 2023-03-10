alert("Getting closer\n\nstudent-manager")
console.log("Student manager!")

const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length < 6) {
        if (studentName !== "") {
            if (!class07Students.includes(studentName)) {
                class07Students.push(studentName);
            } else {
                console.log(`Student ${studentName} is already in the class`);
            }
        } else {
            console.log("You cannot add an empty string to a class");
        }
    }
    else if ((!class07Students.includes("queen")) && (studentName === "queen")){
        class07Students.push(studentName);
    }
    else {
        console.log("Cannot add more students to class 07");
    }
}

for (let input = 0; input < 10; input++) {
    let userName = prompt(`Enter the student name ${input + 1}: `);
    addStudentToClass(userName.toLowerCase());
}

function getNumberOfStudents() {
    return class07Students.length;
}

console.log(`Length of the class: ${getNumberOfStudents()}`);
console.log("List of students in the class:");
console.log(class07Students.join("\n"));
