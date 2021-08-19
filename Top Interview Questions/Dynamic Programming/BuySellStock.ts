function maxProfit(prices: number[]): number {
  let buyIndex:number = 0;
  let sellIndex:number = 0;
  let profit:number = 0;

  // console.log(prices);

  for (let i = 0; i < prices.length; i++) {

    // find min
    if (prices[buyIndex] > prices[i]) {
      buyIndex = i;
      if (sellIndex < prices.length-1) sellIndex = i+1;
    }

    if (prices[sellIndex] < prices[i]) sellIndex = i;

    if (prices[sellIndex] - prices[buyIndex] > profit && sellIndex > buyIndex) {
      profit = prices[sellIndex] - prices[buyIndex];
      // console.log(`sell[${sellIndex}]: ${prices[sellIndex]} - buy[${buyIndex}]: ${prices[buyIndex]}`);
    }

  }

  // if (sellIndex > buyIndex)
  //   profit = prices[sellIndex] - prices[buyIndex];

  // console.log(`sellIndex: ${sellIndex} and buyIndex: ${buyIndex}`);
  // console.log(`profit: ${profit}`);
  if (buyIndex > prices.length-1 || sellIndex > prices.length-1) return profit;

  

  
  return profit;
  // return profit + maxProfit(prices.slice(sellIndex+1, prices.length));
};

console.log(maxProfit([2,4,1]));
console.log(maxProfit([7,1,5,3,6,4,6,4,3,1,7,1,5,3,6,4,6,4,3,1]));