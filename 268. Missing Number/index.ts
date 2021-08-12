function missingNumber(nums: number[]): number {
    return (nums.length * (1 + nums.length) / 2) - nums.reduce((prev, c) => prev + c)
};

// Input: nums = [3, 0, 1]
// Output: 2
console.log('1', missingNumber([3, 0, 1]), '2')

// Input: nums = [0, 1]
// Output: 2
console.log('2', missingNumber([0, 1]), '2')

// Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
// Output: 8
console.log('3', missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), '8')

// Input: nums = [0]
// Output: 1
console.log('4', missingNumber([0]), '1')