// ============================================================
// ASSIGNMENT 5: LOOPS
// ============================================================


// 1. Print numbers from 1 to 20
console.log("Numbers 1 to 20:");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("");


// 2. Print even numbers from 1 to 20 using a while loop
console.log("Even numbers from 1 to 20:");

let number = 1;

while (number <= 20) {
    if (number % 2 === 0) {
        console.log(number);
    }

    number++;
}

console.log("");


// 3. Create an array of books
const books = [
    {
        id: 1,
        title: "JavaScript Basics",
        isAvailable: true
    },
    {
        id: 2,
        title: "Learning HTML",
        isAvailable: false
    },
    {
        id: 3,
        title: "CSS Fundamentals",
        isAvailable: true
    },
    {
        id: 4,
        title: "Modern Web Development",
        isAvailable: true
    }
];


// 4. Loop through books using a regular for loop
console.log("Books using a regular for loop:");

for (let i = 0; i < books.length; i++) {
    console.log(`Book ${i + 1}: ${books[i].title}`);
}

console.log("");


// 5. Loop through books using a for...of loop
console.log("Books using for...of:");

let bookNumber = 1;

for (const book of books) {
    console.log(`Book ${bookNumber}: ${book.title}`);
    bookNumber++;
}

console.log("");

console.log("Assignment 5 completed successfully!");