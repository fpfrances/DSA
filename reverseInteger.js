// Convert number to string
// Convert string to array
// Reverse the array
// Convert array back to string
// Convert string to number
// Return number

// Best way to solve this problem is to use the built-in JavaScript methods
const reverseInteger = (num) => {
    const reversedNum = parseInt(num.toString().split('').reverse().join(''));
    return reversedNum * Math.sign(num);
}

console.log(reverseInteger(123)); // 321
console.log(reverseInteger(12345)); // 54321
console.log(reverseInteger(123456789)); // 987654321
console.log(reverseInteger(-123456)); // -654321