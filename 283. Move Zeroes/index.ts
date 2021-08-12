/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
};

// Input: nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
let arr = [0, 1, 0, 3, 12]
console.log('1', moveZeroes(arr), arr, '[1, 3, 12, 0, 0]')

// Input: nums = [0]
// Output: [0]
console.log('2', moveZeroes([0]), '0')

let arr2 = [0, 0, 1]
console.log('3', moveZeroes(arr2), arr2, '0')