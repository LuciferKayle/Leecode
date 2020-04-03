function HashTable() {
    var table = []

    // 散列函数
    var loseloseHashCode = function (key) {
        var hash = 0

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }

        return hash % 37
    }

    // 更加好的散列函数
    var djb2HashCode = function(key) {
        var hash = 5381
        for (let i = 0; i < key.length; i++) {
            hash = hash*33 + key.charCodeAt(i)           
        }

        return hash % 1013
    } 


    this.put = function(key, value) {
        var position = djb2HashCode(key)
        console.log(position + ' - ' + key)
        table[position] = value
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)]
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined
    }

    this.print = function() {
        for (let i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + " : " + table[i])
            }            
        }
    }

    
}

module.exports = HashTable