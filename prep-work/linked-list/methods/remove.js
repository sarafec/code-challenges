/*

To delete a node from a linked list, we need to find the previous node of the node being deleted. We'll change the next of that previous node. 
Time complexity is O(n)

*/

function deleteNode(head, key) {
	let	temp = head,
		prev = null;

// if head is key
	if (temp !== null && temp.data === key) {
		head = temp.next;
		return;
	}
	
	// traverse list
	while (temp !== null && temp.data !== key) {
		prev = temp;
		temp = temp.next;
	}
	
	// if key is not present in linked list
	if (temp === null) return;

	// unlink the node from linked list
	prev.next = temp.next;
}
