
class ListNode83 {
    val: number
    next: ListNode83 | null
    constructor(val?: number, next?: ListNode83 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode83 | null): ListNode83 | null {
    let cNow = head
    while (cNow) {
        if (cNow.next) {
            if (cNow.val === cNow.next.val) {
                cNow.next = cNow.next.next
            } else {
                cNow = cNow.next
            }
        } else {
            cNow = null
        }
    }
    return head
};

// Input: head = [1, 1, 2]
// Output: [1, 2]
console.log(`1. ${deleteDuplicates(new ListNode83(1, new ListNode83(1, new ListNode83(2))))} = [1, 2]`)

// Input: head = [1, 1, 2, 3, 3]
// Output: [1, 2, 3]
console.log(`2. ${deleteDuplicates(new ListNode83(1, new ListNode83(1, new ListNode83(2, new ListNode83(3, new ListNode83(3))))))} = [1, 2, 3]`)