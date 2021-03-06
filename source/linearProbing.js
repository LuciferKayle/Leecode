// 线性探查
function LinearProbing() {
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

        if (table[position] === undefined) {
            table[position] = new ValuePair(key, value)
        } else {
            var index = ++position
            while(table[index] !== undefined) {
                index++
            }

            table[index] = new ValuePair(key, value)
        }
    }

    this.get = function(key) {
        var position = loseloseHashCode(key)

        if(table[position] !== undefined) {
            if(table[position].key === key) {
                return table[position].value
            } else {
                var index = ++position
                while(table[index] === undefined || table[index].key !== key) {
                    index++
                }

                if(table[index].key === key) {
                    return table[index].value
                }
            }
        }

        return undefined
    }
    

    this.remove = function(key) {
        var position = loseloseHashCode(key)

        if(table[position] !== undefined) {
            if(table[position].key === key) {
                return table[position] = undefined
            } else {
                var index = ++position
                while(table[index] === undefined || table[index].key !== key) {
                    index++
                }

                if(table[index].key === key) {
                    return table[index] = undefined
                }
            }
        }

        return undefined
    }
}

module.exports = LinearProbing