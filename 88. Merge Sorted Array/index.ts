// Вам даны два целых массива nums1 и nums2, отсортированные в неубывающем порядке, и два целых числа m и n, представляющих количество элементов в nums1 и nums2 соответственно.
// Объедините nums1 и nums2 в один массив, отсортированный в неубывающем порядке.

/**
 Ничего не возвращайте, вместо этого измените nums1 на месте.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < nums1.length - m; i++) {
        nums1.pop()
        nums1.unshift(0)
    }

    let cur1 = nums1.length - m
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[cur1]
        let num2 = nums2[0]

        if (num2 != undefined) {
            if (num < num2) {
                nums1[i] = num
                nums1[cur1] = 0
                cur1++
            } else {
                let num2 = nums2.shift()!
                nums1[i] = num2
            }
        }
    }
    console.log('res:', nums1)
};

console.log(`0. ${merge([1, 2, 3, 0, 0, 0, 0], 3, [2, 3, 4, 7], 4)} = [1, 2, 2, 3, 3, 4, 7]`)

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
console.log(`1. ${merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)} = [1, 2, 2, 3, 5, 6]`)

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
console.log(`2. ${merge([1], 1, [], 0)} = [1]`)

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
console.log(`3. ${merge([0], 0, [1], 1)} = [1]`)

// Input: nums1 = [1,2,4,5,6,0], m = 5, nums2 = [3], n = 1
// Output: [1]
console.log(`4. ${merge([1, 2, 4, 5, 6, 0], 5, [3], 1)} = [1, 2, 3, 4, 5, 6]`)

// Input: nums1 = [0,0,3,0,0,0,0,0,0], m = 3, nums2 = [-1,1,1,1,2,3], n = 6
// Output: [1]
console.log(`5. ${merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6)} = [-1,0,0,1,1,1,2,3,3]`)

// Input: nums1 = [4,5,6,0,0,0], m = 3, nums2 = [-1,1,1,1,2,3], n = 6
console.log(`6. ${merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)} = [1,2,3,4,5,6]`)

console.log(`7. ${merge([0, 3, 0, 0], 2, [-1, 1], 2)} = [-1,0,1,3]`)

console.log(`8. ${merge([2, 3, 0, 0], 2, [1, 4], 2)} = [1,2,3,4]`)