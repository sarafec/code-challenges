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

let l1 = new ListNode(14, 22, 55, 37, 180);

let l2 = new ListNode(44, 72, 66, 83, 120);

var mergeTwoLists = function(l1, l2) {

	console.log(l1);

};

console.log(mergeTwoLists(l1, l2));