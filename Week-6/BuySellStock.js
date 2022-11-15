var buySellStock = function (prices) {

    var minimumSofar = prices[0];
    var maxProfit = 0;

    for (const i of prices) {

        if (minimumSofar > prices[i]) { // Check that the Ith possitino value is less then the minimum value if condition is true modify the minimum value to new value.
            minimumSofar = prices[i];
        }
        if ((prices[i] - minimumSofar) > maxProfit) {
            maxProfit = (prices[i] - minimumSofar);
        }
    }
    return maxProfit;
}

console.log(buySellStock([70, 1, 5, 3, 6, 4]))