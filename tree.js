
// const util = require('util')

// 实现二叉树查找
function BinarySearchTree() {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }

    var root = null

    // 插入节点的私有函数
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }
    // 插入新的键
    this.insert = function (key) {
        var newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    // 中序遍历
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback)
    }



    // 先序遍历
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }

    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback)
    }

    // 后续遍历
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback)
    }

    // 找到树种最大的值
    var minNode = function(node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node.key
        }

        return null
    }

    this.min = function() {
        return minNode(root)
    }

    // 找出树中的最大的值
    var maxNode = function(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }
    this.max = function() {
        return maxNode(root)
    }

    // 搜索树中某一个特定的值
    var searchNode = function(node, key) {
        if(node === null) {
            return false
        } 

        if(key < node.key) {
            return searchNode(node.left, key)
        } else if( key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }

    }

    this.search = function(key) {
        return searchNode(root, key)
    }

    //  移除一个节点    
    var findMinNode = function(node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node
        }

        return null
    }

    var removeNode = function(node, key) {
        if(node === null) {
            return null
        }
        if(key < node.left) {
            node.left = removeNode(node.left, key)
            return node
        } else if(key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else { //键等于node.key
            // 叶节点
            if(node.left === null && node.right === null) {
                node = null
                return node
            }

            // 一个子节点
            if(node.left === null) {
                node = node.right
                return node
            } else if(node.right === null) {
                node = node.left
                return node
            }

            // 两个子
            
            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node

        }
    }


    this.remove = function(key) {
        root = removeNode(root, key)
    }


    //  打印结果
    this.printf = function () {
        // console.log(util.inspect(root,{depth: 12}))
        console.log(root)
    }

}


//-----------------------测试代码-------------------------
var tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)


// console.log(tree.printf())


// 检测树的遍历
function printNode(value) {
    console.log(value)
}

// tree.inOrderTraverse(printNode)
// tree.preOrderTraverse(printNode)
// tree.postOrderTraverse(printNode)

// console.log(tree.min())
// console.log(tree.max())

tree.printf()
tree.remove(15)
tree.printf()
