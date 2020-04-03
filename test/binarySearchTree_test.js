// const BinarySearchTree = require('../source/binarySearchTree')
const { BinarySearchTree } = require('../index')

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