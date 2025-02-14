// Make the string lowercase
// Convert string to array
// Capitalize the first letter of each word
// Convert array back to string

// Best way to solve this problem is to use the built-in JavaScript methods
const sentenceCap = (str) => {
    const words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(sentenceCap(`hello world`)); // Hello World
console.log(sentenceCap(`THIS IS A TEST`)); // This Is A Test
console.log(sentenceCap(`i am the best`)); // This Is A Test
console.log(sentenceCap(`LIFE IS BEAUTIFUL`)); // This Is A Test