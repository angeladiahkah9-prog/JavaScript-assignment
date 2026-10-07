// Assignment 8: Functions and Arrow Functions

// ------------------------------------
// 1. greet() regular function
// ------------------------------------

function greet(greeting = "Hello", name) {
    if (!name) {
        return `${greeting}!`;
    }

    return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet("Hello", "Angela"));


// ------------------------------------
// 2. add() regular function
// ------------------------------------

function add(a, b) {
    return a + b;
}

console.log(`Add: ${add(5, 3)}`);


// ------------------------------------
// add() as an arrow function
// ------------------------------------

const addArrow = (a, b) => {
    return a + b;
};

console.log(`Add arrow: ${addArrow(5, 3)}`);


// ------------------------------------
// 3. isEven() regular function
// ------------------------------------

function isEven(n) {
    return n % 2 === 0;
}

console.log(`Is 10 even? ${isEven(10)}`);


// ------------------------------------
// isEven() as an arrow function
// ------------------------------------

const isEvenArrow = (n) => {
    return n % 2 === 0;
};

console.log(`Is 7 even? ${isEvenArrow(7)}`);


// ------------------------------------
// 4. celsiusToFahrenheit() regular function
// ------------------------------------

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);


// ------------------------------------
// celsiusToFahrenheit() as an arrow function
// ------------------------------------

const celsiusToFahrenheitArrow = (c) => {
    return (c * 9 / 5) + 32;
};

console.log(
    `25°C = ${celsiusToFahrenheitArrow(25)}°F`
);


// ------------------------------------
// 5. getAverage()
// ------------------------------------

function getAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let total = 0;

    for (const number of arr) {
        total += number;
    }

    return total / arr.length;
}

const numbers = [10, 20, 30, 40, 50];

console.log(`Average: ${getAverage(numbers)}`);