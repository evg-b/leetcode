// Получив корень двоичного дерева, вернуть в порядке обхода значений его узлов.

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

// Input: root = [1, null, 2, 3]
// Output: [1, 3, 2]
console.log(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))))

// Input: root = []
// Output: []

// Input: root = [1]
// Output: [1]

// Input: root = [1, 2]
// Output: [2, 1]

// Input: root = [1, null, 2]
// Output: [1, 2]