// ============================================================
// ASSIGNMENT 4: OBJECT LITERALS
// ============================================================

// Create a student object
const student = {
    firstName: "Cerio",
    age: 37,

    courses: [
        "JavaScript",
        "Database Management",
        "Web Development"
    ],

    address: {
        street: "Point Four",
        city: "Monrovia",
        county: "Montserrado"
    }
};


// Print student properties
console.log("Student name:", student.firstName);

console.log("Second course:", student.courses[1]);

console.log("Student city:", student.address.city);

console.log("");


// Add an email property
student.email = "cerio@example.com";

console.log("Student email:", student.email);

console.log("");


// Create an array of book objects
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


// Print the third book's title
console.log("Third book title:", books[2].title);

console.log("");


// Convert the books array to JSON
console.log("Books as JSON:");
console.log(JSON.stringify(books));

console.log("");

console.log("Assignment 4 completed successfully!");