/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let first = head;
    let second = head;
    let n=0;
    
    while(first) {
        first = first.next
        n++
    }
    
    mid = Math.round(n/2)-1
    while(mid > 0) {
        second = second.next
        mid--;
    }
    
    return n % 2 == 0? second.next: second;
};