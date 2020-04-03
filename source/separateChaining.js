// 分离链接
const LinkedList = require('./linkedList')
function SeparateChaining() {
    var table = []

    // 散列函数
    var loseloseHashCode = function (key) {
        var hash = 0

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }

        return hash % 37
    }

    var ValuePair = function (key, value) {
        this.key = key
        this.value = value
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function (key, value) {
        var position = loseloseHashCode(key)

        if (table[position] == undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }

    this.get = function (key) {
        var position = loseloseHashCode(key)
        if (table[position] !== undefined) {
            var current = table[position].getHead()

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.key
                }
                current = current.next
            }
        }

        return undefined

    }

    this.remove = function (key) {
        var position = loseloseHashCode(key)
        var current = table[position].getHead()
        if (table[position] !== undefined) {
            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element)
                }

                if (table[position].isEmpty()) {
                    table[position] = undefined
                }

                return true
            }
            current = current.next
        } else {
            return false
        }

    }

}

module.exports = SeparateChaining