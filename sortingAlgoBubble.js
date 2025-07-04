// Create an empty array for numbers
let numbers = [];

// Prompt user for input
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number:"));
    numbers.push(num);
}

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            console.log(Comparing ${arr[i]} and ${arr[i + 1]});
            if (arr[i] > arr[i + 1]) {
                // Swap
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range of comparison
    } while (swapped);
    return arr;
}

// Sort the array and log the result
let sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray);
