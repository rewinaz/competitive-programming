/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
     const zeroNode = new ListNode();
    let l3 = zeroNode;
    let carry = 0;
    
    while (l1 || l2) {
        const value1 = l1?.val || 0;
        const value2 = l2?.val || 0;
        const sum = value1 + value2 + carry;
        const value3 = sum % 10;
        
        carry = Math.floor(sum / 10);
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        l3.next = new ListNode(value3);
        l3 = l3.next;
    }
    
    if (carry) {
        l3.next = new ListNode(carry);
    }
    
    return zeroNode.next;
};