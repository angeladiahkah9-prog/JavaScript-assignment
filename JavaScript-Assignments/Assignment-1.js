// ============================================================
// ASSIGNMENT 1: VARIABLES AND DATA TYPES
// ============================================================

// Declare variables using let and const
const name = "Cerio Gbedee";
let age = 37;
const gpa = 3.25;
const isStudent = true;

const nullValue = null;
let undefinedValue;

// Print each value with its typeof
console.log("Name:", name);
console.log("Type of name:", typeof name);

console.log("");

console.log("Age:", age);
console.log("Type of age:", typeof age);

console.log("");

console.log("GPA:", gpa);
console.log("Type of GPA:", typeof gpa);

console.log("");

console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

console.log("");

console.log("Null value:", nullValue);
console.log("Type of nullValue:", typeof nullValue);

console.log("");

console.log("Undefined value:", undefinedValue);
console.log("Type of undefinedValue:", typeof undefinedValue);

console.log("");


// Demonstrate that a const variable cannot be reassigned
console.log("Const variables cannot be reassigned.");

console.log("If you try to change 'name', JavaScript gives a TypeError.");
// name = "John"; // Uncommenting this line causes a TypeError.

console.log("");

console.log("Assignment 1 completed successfully!");