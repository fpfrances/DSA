// Indicates that the algorithm's execution time grows quadratically
// with the size of the input data set. This is common with algorithms
// that involve nested iterations over the data set.
// Deeper nested iterations will result in O(n^3), O(n^4) etc.

const numbers = [1, 2, 3, 4, 5];

// O(n^2) time complexity (nested for loop)
function findPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
}

findPairs(numbers);
