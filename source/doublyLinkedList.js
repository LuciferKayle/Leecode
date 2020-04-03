//双链表的实现
function DoubluLinkedList() {
    var Node = function (element) {
        this.element = element
        this.prev = null
        this.next = null
    }

    var length = 0
    var head = null
    var tail = null

    this.insert = function (position, element) {

        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0
            if (position === 0) {
                // 是否只有一个元素
                if (!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if (position === length) {
                current = tail
                current.next = node
                node.prev = current
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }

                // 双向链表链接
                node.next = current
                previous.next = node

                current.prev = node
                node.prev = previous
            }

            length++

            return true
        } else {
            return false
        }
    }

    // 移除某个元素

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head,
                previous,
                next

            if (position === 0) {
                head = current.next

                if (length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if (position === length - 1) {
                current = tail
                tail = current.prev
                tail.next = null
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }

                previous.next = current.next
                current.next.prev = previous
            }

            length--
            return current.element


        } else {
            return null
        }
    }
}
module.exports = DoubluLinkedList   