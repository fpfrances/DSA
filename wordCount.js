const text = "Hello my name name name is robert";

// One way of solving it
function wordCounter(text) {
   const lowerText = text.toLowerCase()
   const wordMap = {}
   const words = lowerText.split(/\s+/)

   for( const word of words) {
    if( word in wordMap) {
        wordMap[word]++
    } else {
        wordMap[word] = 1
    }
   }
   return wordMap
}

const result = wordCounter(text)
console.log(result);
console.log(`----------------------------------------------------------------`);

// Another way of solving it
/*
const wordCounts = text.split(' ').reduce((counts, word) => {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
}, {});

console.log(wordCounts);
*/