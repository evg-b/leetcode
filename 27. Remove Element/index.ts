function removeElement(nums: number[], val: number): number {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        }
    }
    return nums.length
};

// Input: nums = [3, 2, 2, 3], val = 3
// Output: 2, nums = [2, 2, _, _]
console.log(`1. ${removeElement([3, 2, 2, 3], 3)} = 2, nums = [2, 2]\n`)

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
console.log(`2. ${removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)} = 5, nums = [0,1,4,0,3]\n`)
