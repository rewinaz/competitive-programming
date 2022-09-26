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

function middleNode(head: ListNode | null): ListNode | null {
    let count:number = 0;
    let mid:number = 0;
    let middleNode:ListNode = new ListNode();
    let copy = new ListNode();
    copy.next = head
    
    while(head){
        count++
        head = head.next
    }
   
    mid = count % 2 == 0 ? (count/2)+1 : Math.round(count/2)
    count=0;
    
    
     
    
    while(copy){
        if(count == mid)
            middleNode = copy
        copy = copy.next
        count++
    }
    
    console.log(middleNode)
    
    
    return middleNode;
};