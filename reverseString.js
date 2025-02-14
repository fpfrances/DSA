// 1. Convert string to array
// 2. Reverse the array
// 3. Convert array back to string

// Best way to solve this problem is to use the built-in JavaScript methods
const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString(`Check that out`));

/*
// Same thing but with arrow functions
const reverseString = (str) => {
    const arr = convertArr(str);
    const reversedArr = arr.reverse();
    return convertStr(reversedArr); 
}

const convertArr = (str) => {
    return str.split('');
}

const convertStr = (arr) => {
    return arr.join('');
}

console.log(reverseString(`hello`));
*/