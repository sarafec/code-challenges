/* Move Occurences of an Element to the End of a Linked List */

/*

Explanation: Traverse the linked list and set a pointer at the tail of the list.
Then check to see if node.data === target. If so, move the node to tail.next

*/

function Node(data) {
	this.data = data;
	this.next = null;
}

function moveTargetToEnd(head, target) {
	let tail = head;
	if (head === null) return null;

	// traverse list to set tail pointer
	while (tail.next !== null) {
		tail = tail.next;
	}

	// set pointer to last element in linked list
	let last = tail,
		current = head,
		prev = null,
		// points to prev when head.data !== target
		prev2 = null;

	// reorder
	while (current !== tail) {
		if (current.data === target && prev2 === null) {
			prev = current;
			current = current.next;
			head = current;
			last.next = prev;
			last = last.next;
			last.next = null;
			prev = null;
		} else {
			if (current.data === target && prev2 !== null) {
				prev = current;
				current = current.next;
				prev2.next = current;
				last.next = prev;
				last = last.next;
				last.next = null;
			} else {
				if (current !== tail) {
					prev2 = current;
					current = current.next;
				}
			}
		}
		return head;
	}
}