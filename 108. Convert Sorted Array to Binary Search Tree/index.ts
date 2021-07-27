// Учитывая целочисленный массив nums, в котором элементы отсортированы в порядке возрастания, преобразуйте его в двоичное дерево поиска со сбалансированной высотой.
// Двоичное дерево со сбалансированной высотой - это двоичное дерево, в котором глубина двух поддеревьев каждого узла никогда не отличается более чем на единицу.
class TreeNode108 {
    val: number
    left: TreeNode108 | null
    right: TreeNode108 | null
    constructor(val?: number, left?: TreeNode108 | null, right?: TreeNode108 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function sortedArrayToBST(nums: number[]): TreeNode108 | null {
    let mid = nums.length / 2 | 0
    let val = nums[mid]

    let left = nums.slice(0, mid)
    let right = nums.slice(mid + 1, nums.length)

    return new TreeNode108(val, !left.length ? null : sortedArrayToBST(left), !right.length ? null : sortedArrayToBST(right))
};

// Input: nums = [-10, -3, 0, 5, 9]
// Output: [0, -3, 9, -10, null, 5]
// Explanation: [0, -10, 5, null, -3, null, 9]
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))

// Input: nums = [1, 3]
// Output: [3, 1]
// Explanation: [1, 3] and[3, 1]
console.log(sortedArrayToBST([1, 3]))