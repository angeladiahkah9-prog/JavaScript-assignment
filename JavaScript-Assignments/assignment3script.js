// ============================================================
// ASSIGNMENT 3: ARRAYS
// ============================================================

// Create an array of foods
const foods = ["Rice", "Chicken", "Fish", "Beans"];

console.log("Foods array:");
console.log(foods);

console.log("");


// 1. Print the second item
console.log("Second food:", foods[1]);

console.log("");


// 2. Add an item using an index
foods[4] = "Potatoes";

console.log("After adding Potatoes:");
console.log(foods);

console.log("");


// 3. Add an item using push()
foods.push("Pasta");

console.log("After push:");
console.log(foods);

console.log("");


// 4. Add an item to the beginning using unshift()
foods.unshift("Bread");

console.log("After unshift:");
console.log(foods);

console.log("");


// 5. Remove the last item using pop()
foods.pop();

console.log("After pop:");
console.log(foods);

console.log("");


// 6. Check if foods is an array
console.log("Is foods an array?");
console.log(Array.isArray(foods));

console.log("");


// 7. Find the index of an item
console.log("Index of Fish:");
console.log(foods.indexOf("Fish"));

console.log("");

console.log("Assignment 3 completed successfully!");