// Prompt user for input
let word1 = prompt("Enter the first word (e.g., RACECAR):");
let word2 = prompt("Enter the second word (e.g., RECORDER):");

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    console.log(Original: ${str}, Reversed: ${reversed});
    return str === reversed;
}

// Log results for both words
console.log(Is "${word1}" a palindrome? ${isPalindrome(word1)});
console.log(Is "${word2}" a palindrome? ${isPalindrome(word2)});
