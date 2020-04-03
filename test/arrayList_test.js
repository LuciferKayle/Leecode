var createSoreArray = function (length) {
    let arr = new ArrayList()
    for (let i = 0 i < length i++) {
        arr.insert(parseInt(Math.random() * 100))
    }
    return arr
}


var array = createSoreArray(5)

console.log(array.toString())

array.selectionSort()

console.log(array.toString())