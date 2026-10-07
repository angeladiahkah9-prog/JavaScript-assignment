// ============================================================
// ASSIGNMENT 7: CONDITIONALS
// ============================================================


// ------------------------------------------------------------
// 1. Grade calculator using if...else
// ------------------------------------------------------------

const score = 85;

if (score >= 90) {
    console.log("Score " + score + ": Grade A");
} else if (score >= 80) {
    console.log("Score " + score + ": Grade B");
} else if (score >= 70) {
    console.log("Score " + score + ": Grade C");
} else if (score >= 60) {
    console.log("Score " + score + ": Grade D");
} else {
    console.log("Score " + score + ": Grade F");
}

console.log("");


// ------------------------------------------------------------
// 2. Grade calculator using a ternary operator
// ------------------------------------------------------------

const grade = score >= 90
    ? "A"
    : score >= 80
        ? "B"
        : score >= 70
            ? "C"
            : score >= 60
                ? "D"
                : "F";

console.log("Ternary grade: " + grade);

console.log("");


// ------------------------------------------------------------
// 3. Switch statement for day of the week
// ------------------------------------------------------------

const day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(day + ": Weekday");
        break;

    case "Saturday":
    case "Sunday":
        console.log(day + ": Weekend");
        break;

    default:
        console.log("Invalid day: " + day);
}


// ============================================================
// ASSIGNMENT 7 COMPLETE
// ============================================================

