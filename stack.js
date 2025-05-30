// Structure where is last in will be the first out, think like a stack of a book on top of each other.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class stack {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.first = newNode
        }

        newNode.next = this.first
        this.first = newNode
        this.length++
        return this
    }

    pop() {

        if(this.length === 0) {
            return undefined
        }

        let temp = this.first
        this.first = this.first.next
        temp.next = null
        this.length--
        return temp
    }
}

let theStack = new stack(0);
theStack.push(1)
theStack.push(2)
theStack.pop()
console.log(theStack)
console.log(`----------------------------------------------------------------`)