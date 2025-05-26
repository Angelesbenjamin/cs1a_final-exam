// Prompt user for input
let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise):");
let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

// Convert input strings to arrays
let names = namesInput.split(',');
let ages = agesInput.split(',').map(Number);

// Create multi-dimensional array
let multiDimArray = [names, ages];

// Restructure the array
let restructuredArray = names.map((name, index) => [name, ages[index]]);
console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(item => console.log(item));
