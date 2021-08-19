// Вам дан массив цен, где price [i] - это цена данной акции в i-й день.
// Найдите максимальную прибыль, которую вы можете получить. Вы можете совершить столько транзакций, сколько захотите (т.е. купить одну и продать одну акцию несколько раз).
// Примечание: вы не можете участвовать в нескольких транзакциях одновременно (т. Е. Вы должны продать акции, прежде чем покупать снова).

function maxProfit2(prices: number[]): number {
    let max = 0
    let min = prices[0]
    let maxProfit = 0
    prices.reduce((prev, cur, index) => {
        if (cur < prev) {
            if (max) {
                maxProfit += max - min
                max = 0
            }
            min = cur
        } else {
            max = cur
        }
        if (index === prices.length - 1 && max) {
            maxProfit += max - min
        }
        return cur
    })
    return maxProfit
};

// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 7
console.log('1', maxProfit2([7, 1, 5, 3, 6, 4]), '7')

// Input: prices = [1, 2, 3, 4, 5]
//  Output: 4
console.log('2', maxProfit2([1, 2, 3, 4, 5]), '4')

// Input: prices = [7, 6, 4, 3, 1]
// Output: 0
console.log('3', maxProfit2([7, 6, 4, 3, 1]), '0')

console.log('4', maxProfit2([2, 1, 2, 0, 1]), '2')

console.log('5', maxProfit2([3, 3, 5, 0, 0, 3, 1, 4]), '8')

/**
 * Наилучшее решение, метод лесенки
*/
// function maxProfit(prices: number[]): number {
//     let m = 0;
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] > prices[i - 1]) {
//             m += prices[i] - prices[i - 1];
//         }
//     }
//     return m;
// };