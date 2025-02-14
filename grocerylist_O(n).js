// Signifies that the execution time of the algorithm grows linearly
// with the size of the input data set.

const groceries = ['milk', 'eggs', 'bread', 'flour', 'water', 'sugar', 'butter'];

// O(n) time complexity with 1 for loop
const searchForItem = (item) => {
    for (let i=0; i < groceries.length; i++) {
        if(groceries[i] === item) {
            console.log(`Found ${item}`);
        }
    }

    for (let i=0; i < groceries.length; i++) {
        if(groceries[i] !== item) {
            console.log(`Found ${item} 2`);
        }
    }

    // n + n = 2n -> O(n)
    // Drop the constant so it becomes O(n)

}

searchForItem('bread');