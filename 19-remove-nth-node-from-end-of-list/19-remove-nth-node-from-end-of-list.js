/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let l = head
    let r = head;
    
    while(n>0) {
        r=r.next;
        n--
    }
    
    while(r && r.next) {
        l = l.next
        r=r.next
    }
    
    
    if(!r) {
        return head.next
    }else {
        l.next=l.next?.next
    }
    return head
    
};