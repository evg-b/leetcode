// Для целочисленного массива nums верните true, если какое-либо значение появляется в массиве не менее двух раз, и верните false, если каждый элемент отличается.

function containsDuplicate(nums: number[]): boolean {
    let mapNum = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (mapNum.has(nums[i])) {
            return true
        } else {
            mapNum.add(nums[i])
        }
    }
    return false
};

// Input: nums = [1, 2, 3, 1]
// Output: true
console.log('1', containsDuplicate([1, 2, 3, 1]), 'true')

// Input: nums = [1, 2, 3, 4]
// Output: false
console.log('2', containsDuplicate([1, 2, 3, 4]), 'false')

// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true
console.log('3', containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), 'true')