// 创建图结构
const Dictionary = require('./dictionary')
const Queue = require('./queue')
const Stack = require('./stack')

function Graph() {
    var vertices = []
    var adjList = new Dictionary()

    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }
    
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function () {
        var s = ''

        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> '

            var neighbors = adjList.get(vertices[i])

            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' '
            }

            s += '\n'
        }

        return s
    }

    // 广度优先查找
    var initializeColor = function () {
        var color = []
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'
        }
        return color
    }
    // 广度优先遍历
    this.bfs = function (v, callback) {
        var color = initializeColor(), queue = new Queue()
        queue.enqueue(v)

        while (!queue.isEmpty()) {
            var u = queue.dequeue(), neighbors = adjList.get(u)
            color[u] = 'grey'

            for (let i = 0; i < neighbors.length; i++) {
                var w = neighbors[i]
                if (color[w] === 'white') {
                    color[w] = 'grey'
                    queue.enqueue(w)
                }
            }

            color[u] = 'black'

            if (callback) {
                callback(u)
            }

        }
    }

    // 查找出最短路径
    this.BFS = function (v, callback) {
        var color = initializeColor(), queue = new Queue(), d = [], pred = []
        queue.enqueue(v)

        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0
            pred[vertices[i]] = null
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(), neighbors = adjList.get(u)
            color[u] = 'grey'

            for (let i = 0; i < neighbors.length; i++) {
                var w = neighbors[i]
                if (color[w] === 'white') {
                    color[w] = 'gray'
                    d[w] = d[u] + 1
                    pred[w] = u
                    queue.enqueue(w)
                }
            }

            color[u] = 'black'

            if (callback) {
                callback(u)
            }

        }

        return {
            distance: d,
            predecessors: pred
        }
    }

    // 深度度优先遍历
    var dfsVisit = function (u, color, callback) {
        color[u] = 'grey'
        if (callback) {
            callback(u)
        }
        var neighbors = adjList.get(u)
        for (let i = 0; i < neighbors.length; i++) {
            var w = neighbors[i]

            if (color[w] === 'white') {
                dfsVisit(w, color, callback)
            }
        }

        color[u] = 'black'
    }

    this.dfs = function (callback) {
        var color = initializeColor()
        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback)
            }
        }
    }

    // 探索深度优先算法
    var DFSVisit = function (u, color, d, f, p) {
        console.log('discovered ' + u)
        color[u] = 'grey'
        d[u] = ++time
        var neighbors = adjList.get(u)
        for (let i = 0; i < neighbors.length; i++) {
            var w = neighbors[i]

            if (color[w] === 'white') {
                p[w] = u
                DFSVisit(w, color, d, f, p)
            }
        }

        color[u] = 'black'
        f[u] = ++time
        console.log('explored ' + u)
    }
    this.DFS = function () {
        var color = initializeColor(),
            d = [],
            f = [],
            p = []

        time = 0
        for (let i = 0; i < vertices.length; i++) {
            f[vertices[i]] = 0
            d[vertices[i]] = 0
            p[vertices[i]] = null
        }

        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p)
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    }


}

module.exports = Graph

