class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
    this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if(this.root === null){
            this.root = newNode
            return this
        }

        let temp = this.root

        while (true) {
            if(newNode.value === temp.value){
                return undefined
            }

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                } else {
                    temp = temp.left
                }
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    
                    return this
                }
                temp = temp.right
            }
        }
    }

    dfsInOrder(node = this.root, data = []){
        if(node === null) return data

        if(node.left)this.dfsInOrder(node.left, data)
        console.log(data) // Shows how is the data added to the array
        data.push(node.value)
        if(node.right) this.dfsInOrder(node.right, data)
        return data
    }
}



const tree = new BST()
tree.insert(5)
tree.insert(8)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(9)
console.log(tree.dfsInOrder())