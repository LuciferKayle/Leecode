function MinCoinChangeByTanXin(coins) {
    var coins = coins

    this.makeChange = function (amount) {
        var change = [], total = 0
        for (var i = coins.length - 1; i >= 0 ;i--) {
            var coin = coins[i]
            while(total + coin <= amount) {
                change.push(coin)
                total += coin
            }            
        }   

        return change
    }
}

module.exports = MinCoinChangeByTanXin