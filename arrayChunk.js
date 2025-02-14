// Create an empty array to hold the chunks
// Set a start index to keep track of where we are in the original array
// Loop through the original array as long as the index hasn't reached the end
// Extract a chunk of the desired size from the original array
// Add the extracted chunk to the `chunked` array
// Move the index forward by the chunk size to get to the next chunk
// Return the final array of chunks

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayChunk = (array, size) => {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        const chunk = array.slice(index, index + size); // Extract a chunk of the desired size from the original array
        chunked.push(chunk); // Add the extracted chunk to the `chunked` array
        index += size; // Move the index forward by the chunk size to get to the next chunk
    }
    return chunked;
}

//console.log(arrayChunk(array, 3)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//console.log(arrayChunk(array, 2)); // Output: [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
console.log(arrayChunk(array, 1)); // Output: [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
//console.log(arrayChunk(array, 4)); // Output: [[1, 2, 3, 4], [5, 6, 7, 8], [9]]

