// ============================================================
// ASSIGNMENT 6: HIGHER-ORDER ARRAY METHODS
// ============================================================

// Numbers array
const numbers = [3, 8, 12, 5, 20, 7, 15];


// ------------------------------------------------------------
// 1. forEach() - Print each number with its index
// ------------------------------------------------------------

console.log("Numbers with indexes:");

numbers.forEach((number, index) => {
    console.log("Index " + index + ": " + number);
});

console.log("");


// ------------------------------------------------------------
// 2. map() - Double every number
// ------------------------------------------------------------

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log("Doubled numbers:");
console.log(doubledNumbers);

console.log("");


// ------------------------------------------------------------
// 3. filter() - Get numbers greater than 10
// ------------------------------------------------------------

const numbersGreaterThan10 = numbers.filter((number) => {
    return number > 10;
});

console.log("Numbers greater than 10:");
console.log(numbersGreaterThan10);

console.log("");


// ------------------------------------------------------------
// 4. map() - Get only book titles
// ------------------------------------------------------------

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

const bookTitles = books.map((book) => {
    return book.title;
});

console.log("Book titles:");
console.log(bookTitles);

console.log("");


// ------------------------------------------------------------
// 5. filter() - Get only available books
// ------------------------------------------------------------

const availableBooks = books.filter((book) => {
    return book.isAvailable;
});

console.log("Available books:");

availableBooks.forEach((book) => {
    console.log(book.title);
});

console.log("");


// ============================================================
// ASSIGNMENT 6 COMPLETE
// ============================================================
