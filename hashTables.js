// Creating a hashtable (size 5)
class hashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

    hashFunction(key) {
        let sum = 0;
        const primeNum = 31;

        // Loop through each character of the key, but up to 100 characters
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(i) - 96;
            sum = (sum * primeNum + charCode) % this.keyMap.length;
        }
        return sum;
    }

    set(key, value) {
        const index = this.hashFunction(key);

        if (!this.keyMap[index]) this.keyMap[index] = []; // Initialize the array at index
            this.keyMap[index].push([key, value]); // Store the key-value pair
            return this;
    }

    get(key) {
        const index = this.hashFunction(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]; // Return the found value
                }
            }
        }
        return undefined; // Key not found
    }

    getallKeys() {
        const keys = []

        for(let i =0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys
    }

    getAllValues() {
        const values = []

        for(let i =0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values
    }
}

// Testing the hash table
const phoneBook = new hashTable();
phoneBook.set('john', '555-333-4444');
phoneBook.set('jordan', '222-444-6666');
phoneBook.set('michael', '111-555-2222');

//console.log(phoneBook.get('john')); // Expected Output: 555-333-4444
//console.log(phoneBook.getallKeys()); // Expected Output: [ 'michael', 'john', 'jordan' ]
console.log(phoneBook.getAllValues()); // Expected Output: [ '111-555-2222', '555-333-4444', '222-444-6666' ]
console.log(`----------------------------------------------------------------`);