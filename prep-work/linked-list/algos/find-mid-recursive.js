/*

We'll use the call stack to count our total number of nodes. THen we'll roll back through the recursion decrementing n by one for each call. We'll return the node where n is zero.

Running time O(n)
Space complexity is O(n)

*/

function findMid(head) {
	let mid = null;
	let size = 1;
	findMidUtil(head, size, mid);
	return mid;
}

function findMidUtil(head, size, mid) {
	if (head === null) {
		size = Math.floor(n / 2);
		return;
	}

	size += 1;
	findMidUtil(head.next, size, mid);
	
	// rolling back, decrement
	size -= 1;
	if (size === 0) {
		mid = head;
	}
}
