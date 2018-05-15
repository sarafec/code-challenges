/*

One solution is to traverse the linked list and create a pointer at the tail. Then traverse again, checking for the key. If found, move the node to the end.
The time complexity of this implementation is O(n)

*/

function moveKeyToEnd(head, key) {
	let tail = head;
	if (head === null) return null;

	// set tail pointer
	while (tail.next !== null) {
		tail = tail.next;
	}

	let	last = tail,
		curr = head,
		prev = null,
		prev2 = null;

		// move keys to end
		while (curr !== tail) {
			if (curr.data === key && prev2 === null) {
				prev = curr;
				curr = curr.next;
				head = curr;
				last.next = prev;
				last = last.next;
				last.next = null;
				prev = null;
			} else {
				if (curr.data === key && prev2 !== null) {
					prev = currr;
					curr = curr.next;
					prev2.next = curr;
					last.next = prev;
					last = last.next;
					last.next = null;
				} else {
					if (curr !== tail) {
						prev2 = curr;
						curr = curr.next;
					}
				}
			}
		}
		return head;
}
