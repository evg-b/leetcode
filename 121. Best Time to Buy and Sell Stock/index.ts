// Вам дан массив цен, где price [i] - это цена данной акции в i-й день.
// Вы хотите максимизировать свою прибыль, выбирая один день для покупки одной акции и выбирая другой день в будущем для продажи этой акции.
// Верните максимальную прибыль, которую вы можете получить от этой сделки. Если вы не можете получить прибыль, верните 0.

function maxProfit(prices: number[]): number {
    let max = 0
    prices.reduceRight((prev, cur) => {
        if (prev < cur) {
            prev = cur
        } else {
            max = Math.max(max, prev - cur)
        }
        return prev
    })
    return max
};

console.log('-2', maxProfit([9, 7, 8, 1, 2]), '1')
console.log('-1', maxProfit([3, 1, 2]), '1')
// // Input: prices = [7, 1, 5, 3, 6, 4]
// // Output: 5
console.log('0', maxProfit([7, 1, 5, 3, 6, 4]), '5')

// // Input: prices = [7,6,4,3,1]
// // Output: 0
console.log('1', maxProfit([7, 6, 4, 3, 1]), '0')

// // Input: prices = [2,1,2,0,1]
// // Output: 0
console.log('2', maxProfit([2, 1, 2, 0, 1]), '1')

// // Input: prices = [3,3,5,0,0,3,1,4]
// // Output: 4
console.log('3', maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), '4')

// Input: prices = [1,3,5,4,3,7,6,9,2,4]
// Output: 8
console.log('4', maxProfit([1, 3, 5, 4, 3, 7, 6, 9, 2, 4]), '8')