// Assignment 4: Object Literals

// Create a student object
const student = {
    firstName: "Angela",
    age: 19,

    courses: [
        "JavaScript",
        "HTML",
        "CSS"
    ],

    address: {
        street: "Main Street",
        city: "Monrovia",
        county: "Montserrado"
    }
};

// Print a single value
console.log(`Name: ${student.firstName}`);

// Print an array value
console.log(`Second course: ${student.courses[1]}`);

// Print a nested value
console.log(`City: ${student.address.city}`);

// Add a new email property
student.email = "angela@example.com";

console.log(`Email: ${student.email}`);

// Create an array of 4 book objects
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

// Print the title of the 3rd book
console.log(`Third book: ${books[2].title}`);

// Convert the array to JSON
const booksJSON = JSON.stringify(books);

console.log(`Books JSON: ${booksJSON}`);