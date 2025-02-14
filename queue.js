// Structure where the first in is the first out, think like a line at register to checkout a product,
// if you're first, you're paying first. Therefore, you are leaving first.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class queueSystem {
    constructor(value) {
     const newNode = new Node(value)
     this.first = newNode
     this.last = newNode
     this.length = 1
    }

    enqueue(value) {
        const newNode = new Node(value)

        if(this.length === 0) {
            this.first = newNode
            this.last = newNode
        }

        this.last.next = newNode
        this.last = newNode
        this.length++
        return this
    }

    dequeue() {

        if(this.length === 0) {
            return undefined
        }

        let temp = this.first

        if(this.length === 1) {
            this.first = null
            this.last = null
        }

        this.first = this.first.next
        temp.next = null
        this.length--
        return temp
    }
}

let myQueue = new queueSystem(0)
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.dequeue()
console.log(myQueue)








console.log(`----------------------------------------------------------------`)