function maxSubArray(nums: number[]): number {
    // let ans = nums[0]
    // let sum = 0
    // let minSum = 0
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i]
    //     ans = Math.max(ans, sum - minSum)
    //     minSum = Math.min(minSum, sum)
    // }
    // return ans

    let ans = nums[0]
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        ans = Math.max(ans, sum)
        sum = Math.max(sum, 0)
    }
    return ans
};

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// Input: nums = [1]
// Output: 1
console.log(maxSubArray([1]))

// Input: nums = [5,4,-1,7,8]
// Output: 23
console.log(maxSubArray([5, 4, -1, 7, 8]))