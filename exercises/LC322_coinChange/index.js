function coinChange(coins, amount) {
    if(amount === 0) return 0;
    coins = coins.sort((a,b) => a-b);
    let minCoinsForNAmount = new Array(amount + 1).fill(Infinity);
    minCoinsForNAmount[0] = 0;

    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            if(coin > i) break;
            minCoinsForNAmount[i] = Math.min(minCoinsForNAmount[i-coin] + 1, minCoinsForNAmount[i]);
        }
    }

    return minCoinsForNAmount[amount] === Infinity ? -1 : minCoinsForNAmount[amount];
}

module.exports = coinChange;
