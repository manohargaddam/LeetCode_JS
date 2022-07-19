var maxProfit = function (prices) {
    if (prices.length <= 1) return 0;
    let cheapest = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (cheapest < prices[i]) 
            profit = Math.max(profit, prices[i] - cheapest);
        else 
            cheapest = prices[i];
    }
    return profit;
};

module.exports = maxProfit;
