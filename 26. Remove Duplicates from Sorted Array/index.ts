function removeDuplicates(nums: number[]): number {
    for (let i = nums.length - 1; i > 0; i--) {
        console.log('i:', i, nums[i], nums[i - 1])
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
        }
    }
    console.log('nums.length:', nums.length, nums)
    return nums.length
};


console.log(`1. ${removeDuplicates([1, 1, 2])} = ${[1, 2]}\n`)

// Input: nums = 
// Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]

console.log(`2. ${removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])} = ${[0, 1, 2, 3, 4]}\n`)