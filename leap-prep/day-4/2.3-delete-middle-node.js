/*
Cracking the Coding Interview - 
2.3 Delete Middle Node

Implement an algortihm to delete a node in the middle 
(not necessarily the exact middle, just not first or last) 
of a singly linked list, only given access to that node.

My thoughts:
If you only had access to the node before it, you could 
just replace the current.next link with current.next.next.
However, you don't have access to the link before it.

Actual solution:
You copy the data from the next node to the current node
and then delete the next node.

That is close to what I thought, but not it at all.

Note that this problem cannot be solved if the node to be
deleted is the last node in the linked list.


*/

function deleteNode(n) {
    if(n === null || n.next == null) {
        return false;
    }
    next = n.next;
    n.data = next.data;
    n.next = next.next;
    return true;
}
