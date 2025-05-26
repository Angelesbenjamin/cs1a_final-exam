// Prompt user for input
let numbersInput = prompt("Enter numbers separated by commas (e.g., 24, 65, 21, 5, 9):");
let namesInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");

// Convert input strings to arrays
let numbers = numbersInput.split(',').map(Number);
let names = namesInput.split(',');

// Merge both arrays
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// Sort names alphabetically
let sortedNames = names.sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
