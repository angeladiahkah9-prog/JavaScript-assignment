// Assignment 5: Loops

// Use a for loop to print numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(`Number: ${i}`);
}

// Use a while loop to print even numbers from 1 to 20
let number = 2;

while (number <= 20) {
    console.log(`Even number: ${number}`);
    number += 2;
}

// Book array
const books = [
    {
        id: 1,
        title: "JavaScript Basics",
        isAvailable: true
    },
    {
        id: 2,
        title: "HTML and CSS",
        isAvailable: true
    },
    {
        id: 3,
        title: "Learning JavaScript",
        isAvailable: false
    },
    {
        id: 4,
        title: "Web Development",
        isAvailable: true
    }
];

// Print books using a regular for loop
for (let i = 0; i < books.length; i++) {
    console.log(`Book ${books[i].id}: ${books[i].title}`);
}

// Print books using for...of
for (const book of books) {
    console.log(`Book ${book.id}: ${book.title}`);
}