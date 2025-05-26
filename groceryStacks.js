
// Create an empty array for grocery items
let groceryStack = [];

// Function to check if the stack is empty
function peek() {
    return groceryStack.length === 0 ? "Stack is empty" : groceryStack[groceryStack.length - 1];
}

// Function to add an item to the stack
function push(item) {
    groceryStack.push(item);
    console.log(Pushed: ${item}, Current Stack: ${groceryStack});
}

// Function to remove the last added item from the stack
function pop() {
    if (!peek()) {
        console.log("Popped: " + groceryStack.pop() + ", Current Stack: " + groceryStack);
    } else {
        console.log(peek());
    }
}

// Prompt user for grocery items
for (let i = 0; i < 5; i++) {
    let item = prompt("Enter a grocery item:");
    push(item);
}

// Example of popping an item
pop();
