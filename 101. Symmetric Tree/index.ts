// Учитывая значение rootдвоичного дерева, проверьте, является ли оно зеркалом самого себя (т. Е. Симметричным относительно своего центра).

//  Definition for a binary tree node.
class TreeNode101 {
    val: number
    left: TreeNode101 | null
    right: TreeNode101 | null
    constructor(val?: number, left?: TreeNode101 | null, right?: TreeNode101 | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function isSameTree101(p: TreeNode101 | null, q: TreeNode101 | null): boolean {
    if (p?.left || p?.right || q?.left || q?.right) {
        return p?.val === q?.val ? isSameTree101(p!.left, q!.right) && isSameTree101(p!.right, q!.left) : false
    } else {
        return p?.val === q?.val
    }
};

function isSymmetric(root: TreeNode101 | null): boolean {
    return isSameTree101(root!.left, root!.right)
};

// Input: root = [1, 2, 2, 3, 4, 4, 3]
// Output: true
console.log(isSymmetric(new TreeNode101(1, new TreeNode101(2, new TreeNode101(3), new TreeNode101(4)), new TreeNode101(2, new TreeNode101(4), new TreeNode101(3)))), ' = true')

// Input: root = [1, 2, 2, null, 3, null, 3]
// Output: false
console.log(isSymmetric(new TreeNode101(1, new TreeNode101(2, null, new TreeNode101(3)), new TreeNode101(2, null, new TreeNode101(3)))), ' = false')
// [1,2,2,2,null,2]
// false
console.log(isSymmetric(new TreeNode101(1,
    new TreeNode101(2, new TreeNode101(2), null),
    new TreeNode101(2, new TreeNode101(2)))), ' = false')

// Input: root = [2,3,3,4,5,null,4]
// Output: false
console.log(isSymmetric(new TreeNode101(2,
    new TreeNode101(3, new TreeNode101(4), new TreeNode101(5)),
    new TreeNode101(3, null, new TreeNode101(4)))), ' = false')