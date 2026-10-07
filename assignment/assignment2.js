// Assignment 2: Strings

const name = "Angela";
const age = 19;

// Using concatenation
const sentence1 = "My name is " + name + " and I am " + age + " years old";
console.log(sentence1);

// Using a template literal
const sentence2 = `My name is ${name} and I am ${age} years old`;
console.log(sentence2);

// JavaScript string
const text = "JavaScript Is Fun";

// String operations
console.log(`Length: ${text.length}`);
console.log(`Uppercase: ${text.toUpperCase()}`);
console.log(`Lowercase: ${text.toLowerCase()}`);
console.log(`First 10 characters: ${text.substring(0, 10)}`);

// Convert string into an array of characters
const characters = text.split("");
console.log(`Characters: ${characters}`);

// Split fruits into an array
const fruits = "apple,banana,mango".split(",");

// Print each fruit
fruits.forEach((fruit) => {
    console.log(`Fruit: ${fruit}`);
});