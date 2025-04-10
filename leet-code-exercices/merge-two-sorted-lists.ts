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

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): number[] | null {
    let current1 = list1;
    let current2 = list2;
    if(list1===null) return listNodeToArray(list2);
    if(list2===null) return listNodeToArray(list1);
    let newList = new ListNode();
    let currentNewList = newList;
    while(current1 !== null && current2 !== null) {
        if(current1.val <= current2.val){
            currentNewList.next = current1;
            currentNewList = currentNewList.next;
            current1=current1.next;
        }else{
            currentNewList.next = current2;
            currentNewList = currentNewList.next;
            current2=current2.next;
        }
        if(current1===null) {
            currentNewList.next = current2;
        }
        if(current2===null) {
            currentNewList.next = current1;
        }
    }

    return listNodeToArray(newList.next);
};

function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(); // nodo ficticio para facilitar el encadenado
    let current = dummy;

    let current1 = list1;
    let current2 = list2;

    while (current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            current.next = current1;
            current1 = current1.next;
        } else {
            current.next = current2;
            current2 = current2.next;
        }
        current = current.next;
    }

    // Añadir el resto de la lista que no se terminó
    current.next = current1 !== null ? current1 : current2;

    return dummy.next;
}

function arrayToListNode(arr: number[]): ListNode | null {
    if(arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for(let i=1; i< arr.length; i++) {
        current.next= new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listNodeToArray(head: ListNode | null): number[] {
    const arr: number[] =[];
    let current = head;
    while(current !==null){
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

console.log(mergeTwoLists(arrayToListNode([]), arrayToListNode([])));