// Assignment 6: Higher-Order Array Methods

const numbers = [3, 8, 12, 5, 20, 7, 15];

// forEach() - print each number with its index
numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
});

// map() - double every number
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(`Doubled numbers: ${doubledNumbers}`);

// filter() - get numbers greater than 10
const numbersGreaterThan10 = numbers.filter((number) => {
    return number > 10;
});

console.log(`Numbers greater than 10: ${numbersGreaterThan10}`);

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

// map() - get only book titles
const titles = books.map((book) => {
    return book.title;
});

console.log(`Book titles: ${titles}`);

// filter() - get only available books
const availableBooks = books.filter((book) => {
    return book.isAvailable;
});

console.log(`Available books: ${availableBooks}`);