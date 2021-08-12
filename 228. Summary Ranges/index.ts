function summaryRanges(nums: number[]): string[] {
    if (!nums.length) return []
    let prev: number = nums[0]
    let res: string[] = [String(prev)]
    for (let i = 1; i < nums.length; i++) {

        if (nums[i] - prev > 1) {

            if (Number(res[res.length - 1]) != prev) {
                res[res.length - 1] = `${res[res.length - 1]}->${prev}`
                res.push(String(nums[i]))
            } else {
                res.push(String(nums[i]))
            }
        } else if (i == nums.length - 1) {
            res[res.length - 1] = `${res[res.length - 1]}->${nums[i]}`
        }
        prev = nums[i]
    }

    return res
};

// Input: nums = [0, 1, 2, 4, 5, 7]
// Output: ["0->2", "4->5", "7"]
console.log('1', summaryRanges([0, 1, 2, 4, 5, 7]), '["0->2", "4->5", "7"]')

// Input: nums = [0, 2, 3, 4, 6, 8, 9]
// Output: ["0", "2->4", "6", "8->9"]
console.log('2', summaryRanges([0, 2, 3, 4, 6, 8, 9]), '["0", "2->4", "6", "8->9"]')

// Input: nums = []
// Output: []
console.log('3', summaryRanges([]), '[]')