/*
Cracking the Coding Interview
Partition - 2.4
Write code to partition a linked list around a value x, 
such that all nodes less than x come before all nodes greater 
than or equal to x. If x is contained within the list, the values 
of x only need to be after the eleements less than x. The partion element 
x can appear anywhere in the right partiion - it doesn't need to appear 
between the left and right partitions.

My thoughts: 
Something with shifting pointers intelligently.

Actual solution:
Create two linked lists - one for elements less than x
and one for elements greater than or equal to x.
We'll iterate through the linked list, inserting elements into our before and our after list.
Once we reach the end of the links list, we'll merge the two lists.

*/

// solution 1 - stable ordering of nodes
function partition(node, x) {
    var beforeStart = null;
    var beforeEnd = null;
    var afterStart = null;
    var afterEnd = null;

    while(node !== null) {
        var next = node.next;
        node.next = nul;
        if (node.data < x) {
            // insert node into end of before list
            if(beforeStart === null) {
                beforeStart = node;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = node;
                beforeEnd = node;
            }
        } else {
            // insert node into end of after list
            if (afterStart === null) {
                afterStart = node;
                afterEnd = afterStart;
            } else {
                afterEnd.next = node;
                afterEnd = node;
            }
        }
        node = next;
    }
    if(beforeStart === null) {
        return afterStart;
    }
    // merge before list and after list
    beforeEnd.next = afterStart;
    return beforeStart;

}

// solution 2 - unstable ordering of nodes, but fewer pointers
// we rearrnge the elements by growing the list at the head adn tail
// elements bigger than the pivot are put at the tail
// elements smaller than the pivot are put at the head

function partition(node, x) {
    var head = node;
    var tail = node;

    while(node !== null) {
        var next = node.next;
        if (node.data < x) {
            // insert node at head
            node.next = head;
            head = node;
        } else {
            // insert node at tail
            tail.next = node;
            tail = node;
        }
        node = next;
    }
    tail.next = null;
    return head;
}