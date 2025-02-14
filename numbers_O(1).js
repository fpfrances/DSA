// O(1) aka Constant Time, signifies that the execution time of an algorithm is constant,
// regardless of the size of the input data set. This is the best time complexity an algorithm
// can have. It means that the algorithm will always execute

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O(1) time complexity
const getElement = (arr, index) => arr[index];
    console.log(getElement(numbers, 0));