// Basically, we are buying on the 2nd day and
// selling on the 5th day to get the maximum profit.

const price = [7, 1, 5, 3, 6, 4]; // Prices of a stock on different days

const maxProfit = price => {
    let minPrice = price[0]; // Assume first price is the minimum price
    let maxProfit = 0;

    for(let i = 1; i < price.length; i++) {
        const currentPrice = price[i];
        minPrice = Math.min(minPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    return maxProfit;
}

console.log("Maximum profit: ", maxProfit(price)); // Output: 5