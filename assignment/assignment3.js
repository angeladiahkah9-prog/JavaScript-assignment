// Assignment 3: Arrays

const foods = [
    "Rice",
    "Pizza",
    "Chicken",
    "Pasta",
    "Burger"
];

// Print the 2nd item
console.log(`Second food: ${foods[1]}`);

// Add one item by index
foods[5] = "Fish";

// Add one item with push()
foods.push("Salad");

// Add one item to the front with unshift()
foods.unshift("Soup");

// Remove the last item with pop()
foods.pop();

// Print the array
console.log(`Foods: ${foods}`);

// Check if it is an array
console.log(`Is this an array? ${Array.isArray(foods)}`);

// Find the position of an item
console.log(`Position of Pizza: ${foods.indexOf("Pizza")}`);

// Bonus: item that does not exist
console.log(`Position of Ice Cream: ${foods.indexOf("Ice Cream")}`);