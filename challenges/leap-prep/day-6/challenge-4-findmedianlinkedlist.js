/*
Problem Statement:
Given a circular and sorted linekd list and a random node, find the median.

The median is either the middle-most element or the average between the two 
most middle element (if list has even number elements).

My thoughts:
Move from the random node forward until the next node is less than the current node.
That is the start of the list. Then find if size of list is even or odd. Move size()/2
nodes forward in the list. Depending on if it is even or odd, you'll either return the
value of the middle-most node or average out the node at size()/2 and size()/2 + 1.

Running time - O(n)

*/

// we will assume the node connects us to a circular linked list
// since we don't have a reference to the ll from this code, we'll just input the size

function findMedianFromLinkedList(node, size) {
    let median;
    
    while(node.data < node.next.data) {
        node = node.next;
    }

    for(let i = 0; i < Math.floor(size/2); i++) {
        node = node.next;
    }

    if(size % 2 === 0) {
        median = (node.data + node.next.data)/2;
    } else {
        median = node.data;
    }

    return median;

};