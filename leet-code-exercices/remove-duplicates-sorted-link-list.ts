import { ListNode } from "./merge-two-sorted-lists";
import {arrayToListNode, listNodeToArray} from "./merge-two-sorted-lists";

function deleteDuplicates(head: ListNode | null): number[] {
    if(head === null){
        const dummy = new ListNode();
        return listNodeToArray(dummy.next);
    };
    let value: ListNode = head;
    let current: ListNode | null = head.next;
    while(current!==null){
        if(current.val===value.val){
            value.next= current.next;
            current=value.next;
        }else{
            value = current;
            current= current.next;
        }    
    }
    return listNodeToArray(head);
};

console.log(deleteDuplicates(arrayToListNode([])))