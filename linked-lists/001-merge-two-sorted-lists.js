/*
source: LeetCode
problem statement:
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing
together the nodes of the first two lists.

input - two sorted linked lists
output - new list

running cases:

edge cases: empty lists
test cases, small:
test cases, big:
*/

//list definition
 function ListNode(val) {
     this.val = val;
     this.next = null;
}

let list1 = new SinglyLinkedList(14, 22, 55, 37, 180);
list1.add(14);
list1.add(22);
list1.add(55);
list1.add(37);
list1.add(180);

let list2 = new SinglyLinkedList(44, 72, 66, 83, 120);
list2.add(44);
list2.add(72);
list2.add(66);
list2.add(83);
list2.add(120);

var mergeTwoLists = function(l1, l2) {

};

console.log(mergeTwoLists(l1, l2));