// const Graph = require('../source/graph') 
const { Graph } = require('../index')

var graph = new Graph()

var myVertices = ['A', 'B', 'C', 'D', 'E', 'F']

for (var i = 0 ;i < myVertices.length ;i++) {
    graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'C') 
graph.addEdge('A', 'D') 
graph.addEdge('B', 'D') 
graph.addEdge('B', 'E') 
graph.addEdge('C', 'F') 
graph.addEdge('F', 'E') 

var result = graph.DFS()

// function printNode(value) {
//     console.log('Visited vertex ' + value)
// }


// graph.bfs(myVertices[0], printNode

// var shortestPathA = graph.BFS(myVertices[0])
// console.log(shortestPathA)

// 利用前溯点数组，构建查找路径
// var fromVertex = myVertices[0]

// for (let i = 0 i < myVertices.length i++) {
//     var toVertex = myVertices[i],
//         path = new Stack()
//     for (var v = toVertex v !== fromVertex v = shortestPathA.predecessors[v]) {
//         path.push(v)
//     }

//     path.push(fromVertex)

//     var s = path.pop()

//     while (!path.isEmpty()) {
//         s += ' - ' + path.pop()
//     }

//     // console.log(s)
// }

console.log(result)
