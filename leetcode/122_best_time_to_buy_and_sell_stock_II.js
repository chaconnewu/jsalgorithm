/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0,
        curLow = prices[0],
        tol = 0,
        i;

    for (i = 1; i < prices.length; i += 1) {
        // console.log(i + ' ' + prices[i] + ' ' + curLow + ' ' + tol);
        if (prices[i] >= prices[i-1]) {
            continue;
        } else {
            if (curLow !== prices[i-1]) {
                tol += prices[i-1] - curLow;
            }

            curLow = prices[i];
        }
    }

    if (prices[prices.length-1] > curLow) {
        tol += prices[prices.length-1] - curLow;
    }

    return tol;
};

prices = [3,4,5,6, 1,2];
console.log(maxProfit(prices));
