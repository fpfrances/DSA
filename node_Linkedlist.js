// Create a node class that has properties for the value stored in the Node,
// and a pointer to the next Node.
class node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

// Create a LinkedList class
class LinkedList {
    constructor(value) {
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1; // Only 1 node in the linked list
    }

    // Add a new node to the linked list (push method)
    push(value) {
        let newNode = new node(value);

        // If the linked list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // Remove the last node from the linked list (pop method)
    pop() {

      // If the linked list is empty
      if(!this.head) {
        return undefined;
      }

      let temp = this.head;
      let prev = this.head;

      while(temp.next) {
        prev = temp;
        temp = temp.next;
      }

      // Remove the last node from the linked list
      this.tail = prev;
      this.tail.next = null;
      this.length--;

      // If there are no nodes left in the linked list
      if(this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return temp;
    }

    // Add a new node to the beginning of the linked list (unshift)
    unshift(value) {
      const newNode = new node(value);

      // If the linked list is empty
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      }

      // Add a new node to the beginning of the linked list
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }

    // Remove the first node from the linked list (shift)
    shift() {
      // If the linked list is empty
      if(!this.head) {
        return undefined;
      }

      let temp = this.head; // Store the first node in a variable
      this.head = this.head.next; // Move the head pointer to the next node
      temp.next = null; // Remove the pointer to the next node
      this.length--; // Decrease the length of the linked list

      if (this.length === 0) {
        this.tail = null; // If there are no nodes left in the linked list
      }

      return temp;
    }

    // Get first node
    getFirst() {
      return this.head;
    }

    // Get the last node
    getLast() {
      // If the linked list is empty
      if(!this.head) {
        return null
      }

      let temp = this.head;

      while(temp){
        if(!temp.next){
          return temp;
        }
        temp = temp.next;
      }
    }

    // Get the specific node
    get(index) {
      let counter = 0;
      let temp = this.head;

      while(temp){
        if(counter === index){
          return temp;
        }
        counter++;
        temp = temp.next;
      }
      return null;
    }

    // Set a specific node to a different value
    set(index, value) {
      let temp = this.get(index);

      if (temp) {
        temp.value = value;
        return true;
      }
      return false;
    }

    // Insert a node in between two nodes
    insert(index, value) {
      if(index === 0){
        return this.unshift(value);
      }

      if(index === this.length){
        return this.push(value);
      }

      const newNode = new node(value);
      const temp = this.get(index - 1); // Use the get method to find the node before the desired position
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return true;
    }

    // Show the length of the linked list
    size(){
      let counter = 0;
      let temp = this.head;

      while(temp){
        counter++;
        temp = temp.next;
      }
      return counter;
    }

    clear() {
      this.head = null;
    }

}

// Create a linked list with a single node
const myLinkedList = new LinkedList(0);
myLinkedList.push(1); // Add a new node with value 1
myLinkedList.push(2); // Add a new node with value 2
myLinkedList.push(3); // Add a new node with value 3
//myLinkedList.pop(); // Remove the last node from the linked list
//myLinkedList.unshift(0); // Add a new node to the beginning of the linked list
//myLinkedList.shift(); // Remove the first node from the linked list 
//console.log(myLinkedList.getFirst()); // Get the first node
//console.log(myLinkedList.getLast()); // Get the last node
//console.log(myLinkedList.get(2)); // Get a specific node (index 3)
//console.log(myLinkedList.set(3, 10)); // Change the value of the node
//console.log(myLinkedList.insert(0, 20)); // Insert value of 20 at index 0
//console.log(myLinkedList.size()); // Just checking the linked list size

console.log(myLinkedList.clear()); // Clear the linked list (undefined)

//console.log(myLinkedList);