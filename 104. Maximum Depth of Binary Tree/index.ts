// Максимальная глубина двоичного дерева - это количество узлов на самом длинном пути от корневого узла до самого дальнего листового узла.

class TreeNode104 {
    val: number
    left: TreeNode104 | null
    right: TreeNode104 | null
    constructor(val?: number, left?: TreeNode104 | null, right?: TreeNode104 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function scanTreeDepth(root: TreeNode104 | null, lvl: number): number {
    if (root?.left || root?.right) {
        return Math.max(scanTreeDepth(root.left, lvl + 1), scanTreeDepth(root.right, lvl + 1))
    } else {
        return lvl
    }
}
function maxDepth(root: TreeNode104 | null): number {
    if (root === null) return 0
    return scanTreeDepth(root, 1)
};

// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: 3
console.log(maxDepth(new TreeNode104(3,
    new TreeNode104(9, null, null),
    new TreeNode104(20, new TreeNode104(15), new TreeNode104(7)))), ' = 3')

// Input: root = [1, null, 2]
// Output: 2
console.log(maxDepth(new TreeNode104(1,
    null,
    new TreeNode104(2))), ' = 2')

// Input: root = []
// Output: 0
console.log(maxDepth(null), ' = 0')

// Input: root = [0]
// Output: 1
console.log(maxDepth(new TreeNode104(0)), ' = 1')