/*

If we didn't care about the ordering, we could use the partition method of quick sort. 

Instead, we can create three lists - smaller than val, equal to val, and greater than 3.

Then, we'll traverse the linked list. We'll put the nodes in their respective lists. Lastly, we'll concatenate the three lists.

*/

function partition (head, val) {
	let	smallerHead = null,
		smallerLast = null,
		greaterHead = null,
		greaterLast = null,
		equalHead = null,
		equalLast = null;
	
	while (head!== null) {
		if (head.data === val) {
			if (equalHead === null) {
				equalHead = head;
				equalLast = head;
			} else {
				equalLast.next = head;
				equalLast = equalLast.next;
			}
		} else if (head.data < val) {	
			if (smallerhead === null) {
				smallerHead = head;
				smallerLast = head;
			} else {
				smallerLast.next = head;
				smallerLast = head;
			}
		} else {
			if (greaterHead === null) {
				greaterHead = head;
				greaterLast = head;
			} else {
				greaterLast.next = head;
				greaterLast = head;
			}
		}
		head = head.next;
	}

	// fix end of greater linked list
	if (greaterLast !== null) {
		greaterLast.next = null;
	}

	// concatenate lists
	// smaller list is empty
	if (smallerHead === null) {
		if (equalHead === null) {
			return greaterHead;
		}
		equalLast.next = greaterHead;
		return equalHead;
	}

	// smaller list is not empty, equal list is empty
	if (equalHead === null) {
		smallerLast.next = greaterHead;
		return smallerHead;
	}

	//smaller and equal list are not empty
	smallerLast.next = equalHead;
	equalLast.next = greaterHead;
	return smallerHead;
}
