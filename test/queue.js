const Queue = require('../source/queue')

// 优先队列的实现(带有权重的队列)
function PriorityQueue() {
    var items = []

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.enQueue = function () {
        var queueElement = new QueueElement(element, priority)
        if (this.isEmpty()) {
            items.push(queueElement)
        } else {
            var added = false

            for (var i = 0; i < items.length; i++) {
                if(queueElement.priority < items[i][priority]) {
                    items.splice(i , 0, queueElement)
                    add = true
                    break
                }
            }

            if(!added) {
                items.push(queueElement)
            }
        }
    }

}


// 循环队列

function hotPotato(nameList, num) {
    var queue = new Queue()

    for(var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    var eliminated = ''

    while (queue.size()  > 1) {
        for(var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }

        eliminated = queue.dequeue()
    }

    return queue.dequeue()
}

var names = ['John','Jack','Camila','Ingrid','Carl']; 
var winner = hotPotato(names, 7); 

console.log('胜利者:' + winner);
