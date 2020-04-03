
// const MinCoinChangeByDp = require('../source/minCoinChangeByDp')
const { MinCoinChangeByDp } = require('../index')

var minCoinChange = new MinCoinChangeByDp([1, 3, 4])
console.log(minCoinChange.makeChange(6))