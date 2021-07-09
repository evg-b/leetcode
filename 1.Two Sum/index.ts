// Учитывая массив целых чисел nums и целочисленную цель, верните индексы двух чисел так, чтобы они складывались в цель.
// Вы можете предположить, что каждый вход будет иметь ровно одно решение, и вы не можете использовать один и тот же элемент дважды.
// Вы можете вернуть ответ в любом порядке.

function twoSum(nums: number[], target: number): number[] {
    let result: number[] = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j && nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    return result
};

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
console.log(`1. ${twoSum([2, 7, 11, 15], 9)} = [0, 1]`)

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
console.log(`2. ${twoSum([3, 2, 4], 6)} = [1, 2]`)

// Input: nums = [3,3], target = 6
// Output: [0,1]
console.log(`3. ${twoSum([3, 3], 6)} = [0, 1]`)