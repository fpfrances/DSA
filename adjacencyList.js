class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    // Adding vertex to the graph
    addVertex(vtx) {
        if(!this.adjacencyList[vtx]) {
            this.adjacencyList[vtx] = []
            return true
        }
        return false
    }

    // Creating connections
    addEdge(vtx1, vtx2) {
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1].push(vtx2)
            this.adjacencyList[vtx2].push(vtx1)
            return true
    }
    return false
    }

    // Removing connections
    removeEdge(vtx1, vtx2) {
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(v => v != vtx2)
            this.adjacencyList[vtx2] = this.adjacencyList[vtx1].filter(v => v != vtx1)
            return true
        }
        return false
    }

    // Remove a specific vertex
    removeVertex(vtx) {
        if(!this.adjacencyList[vtx]) return undefined
        
        for (let neighbor of this.adjacencyList[vtx]){
            this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(v => v != vtx)
        }

        delete this.adjacencyList[vtx]
        return this
    }
}


const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('B', 'D')
g.addEdge('C', 'D')
//g.removeEdge('A', 'B')
g.removeVertex('D')
console.log(g)