var array = new Array(1, 2, 3, 5, 6)


var friends = [
    { name: 'tom', age: 13 },
    { name: 'John', age: 3 },
    { name: 'jerry', age: 45 },
    { name: 'carl', age: 1 },
    { name: 'lusify', age: 287 },
]

friends.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})



var names = ["Ana", "John", "ana", "john"]

names.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1
    }
    return 0
})

console.log(names)