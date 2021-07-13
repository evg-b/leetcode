function searchInsert(nums: number[], target: number): number {
    let l = 0
    let r = nums.length - 1
    let t = 0
    while (l <= r) {
        t = l + r >> 1
        if (nums[t] == target) {
            return t
        } else if (nums[t] > target) {
            r = t - 1
        } else {
            l = t + 1
        }
    }
    if (nums[t] > target) {
        return t
    } else {
        return t + 1
    }
};

// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2
console.log(`1. ${searchInsert([1, 3, 5, 6], 5)} = 2\n`)

// Input: nums = [1, 3, 5, 6], target = 2
// Output: 1
console.log(`2. ${searchInsert([1, 3, 5, 6], 2)} = 1\n`)

// Input: nums = [1, 3, 5, 6], target = 7
// Output: 4
console.log(`3. ${searchInsert([1, 3, 5, 6], 7)} = 4\n`)

// Input: nums = [1, 3, 5, 6], target = 0
// Output: 0
console.log(`4. ${searchInsert([1, 3, 5, 6], 0)} = 0\n`)

// Input: nums = [1], target = 0
// Output: 0
console.log(`5. ${searchInsert([1], 0)} = 0\n`)

// Input: nums = [1,3], target = 2
// Output: 1
console.log(`6. ${searchInsert([1, 3], 2)} = 1\n`)