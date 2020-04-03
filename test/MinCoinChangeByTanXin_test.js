const MinCoinChangeByTanXin = require('../source/minCoinChangeByTanXin')



var minCoinChange = new MinCoinChangeByTanXin([1, 3, 4])
console.log(minCoinChange.makeChange(6))