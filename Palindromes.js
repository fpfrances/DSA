// Convert string to array
// Reverse the array
// Convert array back to string
// Compare Strings

// Best way to solve this problem is to use the built-in JavaScript methods
const isPalindrome = (str) => str.split('').reverse().join('') === str;

/*
// Another way of solve
const isPalindrome = (str) => {
    const reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
}
*/

console.log(isPalindrome(`racecar`)); // true
console.log(isPalindrome(`hello`)); // false
console.log(isPalindrome(`abba`)); // true