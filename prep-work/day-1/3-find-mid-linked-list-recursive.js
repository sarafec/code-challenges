/* Find Middle of Singly Linked List Recursively */ 

/*

Explanation: Count total number of nodes in the list in a recursive
manner. Then, roll back half of the length of all nodes. Return the
node where n is zero.

Running Time: O(n)
Space Complexity: O(n) - we'll walk through the whole list recursively

*/

function Node(data) {
	this.data = data;
	this.next = null;
}

function findMid(head) {
	let mid = null;
	let n = 1;
	findMidUtil(head, n, mid);
	return mid;
}

function findMidUtil(head, n, mid) {
	if (head === null) {
		n = Math.floor(n/2);
		return;
	}

	n = n + 1;

	findMidUtil(head.next, n, mid);

	n = n - 1;

	// set final mid value
	if (n === 0) {
		mid = head;
	}
}