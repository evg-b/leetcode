// Учитывая корни двух двоичных деревьев p и q, напишите функцию, чтобы проверить, совпадают ли они или нет.
// Два бинарных дерева считаются одинаковыми, если они структурно идентичны и узлы имеют одинаковое значение.

// Definition for a binary tree node.
class TreeNode100 {
    val: number
    left: TreeNode100 | null
    right: TreeNode100 | null
    constructor(val?: number, left?: TreeNode100 | null, right?: TreeNode100 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// function inorderTraversal100(root: TreeNode100 | null): number[] {
//     if (!root) return []
//     return [...inorderTraversal100(root.left), root.val, ...inorderTraversal100(root.right)]
// };
function isSameTree(p: TreeNode100 | null, q: TreeNode100 | null): boolean {
    if (p?.left || p?.right || q?.left || q?.right) {
        if (p?.val === q?.val) {
            let left = isSameTree(p!.left, q!.left)
            let right = isSameTree(p!.right, q!.right)
            return left && right
        } else {
            return false
        }
    } else {
        return p?.val === q?.val
    }
    // можно по короче, так то можно и в одну строчку если захотеть
    // if (p?.left || p?.right || q?.left || q?.right) {
    //     return p?.val === q?.val ? isSameTree(p!.left, q!.left) && isSameTree(p!.right, q!.right) : false
    // } else {
    //     return p?.val === q?.val
    // }
};

// Input: p = [1, 2, 3], q = [1, 2, 3]
// Output: true
console.log(isSameTree(
    new TreeNode100(1, new TreeNode100(2), new TreeNode100(3)),
    new TreeNode100(1, new TreeNode100(2), new TreeNode100(3))), ' = true')

// Input: p = [1, 2], q = [1, null, 2]
// Output: false
console.log(isSameTree(
    new TreeNode100(1, new TreeNode100(2)),
    new TreeNode100(1, null, new TreeNode100(2))), ' = false')

// Input: p = [1,2,1], q = [1,1,2]
// Output: false
console.log(isSameTree(
    new TreeNode100(1, new TreeNode100(2), new TreeNode100(1)),
    new TreeNode100(1, new TreeNode100(1), new TreeNode100(2))), ' = false')

// Input: p = [1,null,1], q = [1,null,1]
// Output: true
console.log(isSameTree(
    new TreeNode100(1, null, new TreeNode100(1)),
    new TreeNode100(1, null, new TreeNode100(1))), ' = true')

// Input: p = [1,1,null], q = [1,null,1]
// Output: true
console.log(isSameTree(
    new TreeNode100(1, null, new TreeNode100(1)),
    new TreeNode100(1, new TreeNode100(1), null)), ' = false')
