// ============================================================
// ASSIGNMENT 2: STRINGS
// ============================================================

const myName = "Cerio";
const myAge = 37;

// Using string concatenation
const sentenceConcatenation =
    "My name is " + myName + " and I am " + myAge + " years old";

console.log(sentenceConcatenation);

// Using a template literal
const sentenceTemplate =
    `My name is ${myName} and I am ${myAge} years old`;

console.log(sentenceTemplate);


// String operations
const javascriptString = "JavaScript Is Fun";

// Print the length
console.log(`Length: ${javascriptString.length}`);

// Print uppercase
console.log(`Uppercase: ${javascriptString.toUpperCase()}`);

// Print lowercase
console.log(`Lowercase: ${javascriptString.toLowerCase()}`);

// Print the first 10 characters
console.log(
    `First 10 characters: ${javascriptString.substring(0, 10)}`
);

// Convert the string into an array of characters
console.log(`Characters: ${javascriptString.split("")}`);


// Split fruits into an array
const fruitsString = "apple,banana,mango";
const fruits = fruitsString.split(",");

console.log(`Fruits: ${fruits}`);


// Print each fruit
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

console.log("Assignment 2 completed successfully!");