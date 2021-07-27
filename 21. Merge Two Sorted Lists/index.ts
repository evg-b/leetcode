// Объедините два отсортированных связанных списка и верните их как отсортированный список. Список должен быть составлен путем сращивания узлов первых двух списков.

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    let res: ListNode | null = new ListNode
    let resCur = res
    while (true) {
        if (l1 && l2) {
            if (l1.val > l2.val) {
                resCur.val = l2.val
                l2 = l2.next
            } else {
                resCur.val = l1.val
                l1 = l1.next
            }
        } else if (!l1 && !l2) {
            break
        } else {
            resCur.val = l1 ? l1.val : l2!.val
            if (l1) {
                l1 = l1.next
            } else {
                l2 = l2!.next
            }
        }
        if (l1 || l2) {
            resCur = resCur.next = new ListNode
        }
    }
    return res
};

// let list1: ListNode | null = new ListNode(1, new ListNode(3))
// let list2: ListNode | null = new ListNode(1, new ListNode(2))
// let ansL = [1, 1, 2, 3]
// console.log('0', mergeTwoLists(list1, list2), ansL)

let list1: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(4)))
let list2: ListNode | null = new ListNode(1, new ListNode(3, new ListNode(4)))
let ansL = [1, 1, 2, 3, 4, 4]
console.log('1', mergeTwoLists(list1, list2))

// let list1 = null
// let list2 = null
// let ansL
// console.log('2', mergeTwoLists(list1, list2), ansL)

// list1 = null
// list2 = new ListNode(0)
// ansL = [0]
// console.log(`3. ${mergeTwoLists(list1, list2)} = ${ansL}\n`)
// console.log('3', mergeTwoLists(list1, list2), ansL)

// let list1: ListNode | null = new ListNode(1, new ListNode(1, new ListNode(1)))
// let list2: ListNode | null = new ListNode(2)
// let ansL = [1, 1, 1, 2]
// console.log('4', mergeTwoLists(list1, list2), ansL)