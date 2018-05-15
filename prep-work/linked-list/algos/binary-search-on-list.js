/*

In our implementation, we'll find the middle node. If the middle matches the search value, we'll return it. Otherwise, we'll change our start and end values, find the mid node there. 
Just like regular binary search.
Time complexity is O(n)

The big difference is how we find the mid node and that it isn't O(log n) running time.

*/

function binarySearch(head, val) {
	let start = head,
		last= null;

	while (last === null || last.next !== start) {
		let mid = getMid(start, last);
		if (mid === null) return null;
		if (mid.data === val) {
			return mid;
		} else if (mid.data < val) {
			start = mid.next;
		} else {
			last = mid;
		}
	}
	return "value not found";
}

function getMid(start, last) {
	if (start === null) return null;

	let	slow = start,
		fast = start.next;

	while (fast !== last) {
		fast = fast.next;
		if (fast !== last) {
			slow = slow.next;
			fast = fast.next;
		}
	}
	return slow;
}
