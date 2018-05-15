/*

We can insert a node at the beginning, after a given node, or at the end.

When adding at the front, we'll add before the head. Our new node will become the new head.
Time complexity - O(1)

If we are given a pointer to a node, and we'll add the node after it, we'll create a new node, we'll make our new nodes's next the next of the prev node. And then we'll make the next of the prev node as the new node.
Time complexity - O(1)

To add a node at the end of the given list, we'll traverse the list until we hit node.next === null, and make node.next = newNode.
Time complexity - O(n)

*/

// add at front
function insert (head, data) {
	let node = new Node(data);
	node.next = head;
	head = new Node;
}

// add after a given node
function insertAfter(prevNode, data) {
	if prevNode === null) return null;
	
	let newNode = new Node(data);
	newNode.next = prevNode.next;
	prevNode.next = newNode;
}

// add at end of list
function appendToEnd(head, data) {
	let newNode = new Node(data);
	if (head === null) {
		head = newNode;
		return;
	}
	let current = head;
	while (current.next !== null) {
		current = current.next;
	}
	last.next = newNode;
	return;
}
