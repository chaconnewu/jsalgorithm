/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices) {
      return 0;
    }

    var curMin = prices[0],
        curMax = prices[0],
        maxPrice = 0,
        i;

    for (i = 1; i < prices.length; i += 1) {
      if (prices[i] > curMax) {
        curMax = prices[i];
        maxPrice = curMax - curMin > maxPrice ? curMax - curMin : maxPrice;
      }

      if (prices[i] < curMin) {
        curMin = prices[i];
        curMax = prices[i];
      }
    }

    return maxPrice;
};

var a = [4,1,2];
console.log(maxProfit(a));

