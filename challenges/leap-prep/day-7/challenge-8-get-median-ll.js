/*
Problem Statement:
Given a circular and sorted linked list and a random node, find the medium

Solution:
Traverse list until the next node is less than the current node.
Get size, traverse until midpoint.
If size is odd, return mid.data, otherwise get average of mid.data and mid.next.data

*/

function getMedian(node) {
    let lengthList = this.size();
    let mid = Math.floor(lengthList/2);

    while(node.data < node.next.data) {
        node = node.next;
    }

    for(let i = 0; i <= mid; i++) {
        node = node.next;
    }

    if (mid % 2 === 0) {
        return (node.data + node.next.data)/2;
    }

    return node.data;

};