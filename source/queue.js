function Queue() {
    var items = []

    // 进入队列
    this.enqueue = function (element) {
        items.push(element)
    }

    // 移除队列第一个
    this.dequeue = function () {
        return items.shift()
    }

    // 返回首个元素

    this.front = function () {
        return items[0]
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.clear = function () {
        items = []
    }

    this.size = function () {
        return items.length
    }

    this.print = function () {
        console.log(items.toString())
    }
}


module.exports = Queue