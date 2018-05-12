/* Partition a Linked List Around a Given Value */

/*

Explanation: We'll create three list - larger than value, equal to value, and less than value.
Then, we'll sort into three lists. Lastly, we'll concatenate the three lists.

Note - we could solve this problem using the parition method from Quick Sort, but
this would not preserve a stable order.

*/

function Node(data) {
	this.data = data;
	this.next = null;
}

function partition(head, target) {
	let smallerHead = new Node(null),
		smallerLast = new Node(null),
		greaterHead = new Node(null),
		greaterLast = new Node(null),
		equalHead = new Node(null),
		equalLast = new Node(null);

	// reorder list
	while (head !== null) {
		// append to equal list
		if (head.data === target) {
			if (equalHead.data == null) { // we know that equalHead !== null, dont' we want to check that its data has a truthy value?
				equalHead = head;
				equalLast = head;
			} else {
				equalLast.next = head;
				equalLast = equalLast.next;
			}
		// append to smaller list
		} else if (head.data < target) {
			if (smallerHead.data === null) {
				smallerHead = head;
				smallerLast = head;
			} else {
				smallerLast.next = head;
				smallerLast = head;
			}
		// append to greater list
		} else {
			if (greaterHead.data === null) {
				greaterHead = head;
				greaterLast = head;
			} else {
				greaterLast.next = head;
				greaterLast = head;
			}
		}
		head = head.next;
	}

	// concatenate lists
	if (greaterLast !== null) {
		greaterLast.next = null;
	}

	if (smallerHead === null) {
		if (equalHead === null) {
			return greaterHead;
		}
		equalLast.next = greaterHead;
		return equalHead;
	}

	if (equalHead === null) {
		smallerLast.next = greaterHead;
		return smallerHead;
	}

	smallerLast.next = equalHead;
	equalLast.next = greaterHead;
	return smallerHead;
}