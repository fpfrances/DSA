class customArr {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
     this.data[this.length] = item;
     this.length++;

     return this.length;

    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    
    shift() {
        const firstItem = this.data[0];

        //re-index the data object
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    delete(index) {
        const item = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}

const newCustomArr = new customArr();

// Push data into the object
newCustomArr.push(`abc`);
newCustomArr.push(`hello`);
newCustomArr.push(`world`);
newCustomArr.push(`1`);
newCustomArr.push(`null`);

console.log(newCustomArr); // Show the data object

//console.log(newCustomArr.shift()); // Remove the first item

// Remove the item at index 1
newCustomArr.delete(1);

//newCustomArr.pop(); // Pop the last item

console.log(newCustomArr); // Show the new data object

//console.log(newCustomArr.get(2)); // Get the index 2 inside the data object