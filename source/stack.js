// 栈遵从LIFO原则
function Stack() {
    var items = []
    
    this.push = function(element) {
        items.push(element)
    }

    // 出栈操作
    this.pop = function() {
        return items.pop()
    }

    // 返回栈顶的元素
    this.peek = function() {
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        return items.length === 0
    }


    this.size = function() {
        return items.length
    }

    this.clear = function() {
        items = []
    }

    this.toString = function() {
        console.log(items.toString())
        return items.toString()
    }

}

module.exports = Stack