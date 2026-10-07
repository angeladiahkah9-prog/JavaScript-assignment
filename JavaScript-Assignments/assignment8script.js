// ============================================================
// ASSIGNMENT 8: FUNCTIONS AND ARROW FUNCTIONS
// ============================================================

// 1. Greet function with a default greeting
function greet(greeting = "Hello", name) {
    if (name) {
        return `${greeting}, ${name}!`;
    }

    return `${greeting}! You did not provide a name.`;
}

console.log(greet("Hello", "Cerio"));
console.log(greet("Good morning"));

console.log("");


// 2. Add numbers using a regular function
function add(a, b) {
    return a + b;
}

console.log(`Regular add: ${add(5, 3)}`);


// Add numbers using an arrow function
const addArrow = (a, b) => {
    return a + b;
};

console.log(`Arrow add: ${addArrow(5, 3)}`);

console.log("");


// 3. Check if a number is even using a regular function
function isEven(n) {
    return n % 2 === 0;
}

console.log(`Regular isEven: ${isEven(10)}`);


// Check if a number is even using an arrow function
const isEvenArrow = (n) => {
    return n % 2 === 0;
};

console.log(`Arrow isEven: ${isEvenArrow(10)}`);

console.log("");


// 4. Convert Celsius to Fahrenheit using a regular function
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

console.log(
    `Regular Celsius to Fahrenheit: ${celsiusToFahrenheit(25)}°F`
);


// Convert Celsius to Fahrenheit using an arrow function
const celsiusToFahrenheitArrow = (c) => {
    return (c * 9 / 5) + 32;
};

console.log(
    `Arrow Celsius to Fahrenheit: ${celsiusToFahrenheitArrow(25)}°F`
);

console.log("");


// 5. Calculate the average of an array
function getAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let total = 0;

    for (const value of arr) {
        total += value;
    }

    return total / arr.length;
}

const scores = [80, 85, 90, 75, 95];

console.log(`Average score: ${getAverage(scores)}`);

console.log("");

console.log("Assignment 8 completed successfully!");