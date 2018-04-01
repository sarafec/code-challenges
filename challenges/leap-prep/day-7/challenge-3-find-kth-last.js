/*
Problem Statement:
Find kth to the last element in a singly linked list

Move the first pointer k steps forward.
Then move the first and second pointer to the end of the linked list.
Once the first pointer reaches the end, the second pointer will be 
in the correct place.

Runtime - O(n), n being the number of nodes in the linked list
*/
function findKthElem(k) {
    if(this.head === null) {
        return 0;
    }

    let curr = this.head;

    while(k > 0) {
        curr = curr.next;
        k--;
    }

    let sec = this.head;
    while(curr !== null) {
        curr = curr.next;
        sec = sec.next;
    }

    let targetData = sec.data;
    return targetData;
}