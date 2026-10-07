// Assignment 7: Conditionals

const score = 85;

// Grade calculator using if / else if / else
if (score >= 90) {
    console.log(`Grade: A`);
} else if (score >= 80) {
    console.log(`Grade: B`);
} else if (score >= 70) {
    console.log(`Grade: C`);
} else if (score >= 60) {
    console.log(`Grade: D`);
} else {
    console.log(`Grade: F`);
}

// Ternary operator
const result = score >= 50 ? "Pass" : "Fail";

console.log(`Result: ${result}`);

// Switch statement for day of the week
const day = "Monday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(`Weekday`);
        break;

    case "Saturday":
    case "Sunday":
        console.log(`Weekend`);
        break;

    default:
        console.log(`Invalid day`);
}

// The break statement stops the switch from
// continuing into the next case.
// Without break, JavaScript may execute the
// following cases as well. This is called fall-through.