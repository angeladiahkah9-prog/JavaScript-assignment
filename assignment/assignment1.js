// Assignment 1: Variables and Data Types

const name = "Angela";
let age = 19;
const gpa = 3.0;
const isStudent = true;

const emptyValue = null;
let undefinedValue;

// Print values and their types
console.log(`Name: ${name}, Type: ${typeof name}`);
console.log(`Age: ${age}, Type: ${typeof age}`);
console.warn(`GPA: ${gpa}, Type: ${typeof gpa}`);
console.log(`Student: ${isStudent}, Type: ${typeof isStudent}`);
console.log(`Null value: ${emptyValue}, Type: ${typeof emptyValue}`);
console.error(`Undefined value: ${undefinedValue}, Type: ${typeof undefinedValue}`);

// A const variable cannot be reassigned.
// The following line would cause an error:
// gpa = 3.5;