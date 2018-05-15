/*

We'll maintain two pointers, odd and even. We will also store the first node of our even linked list so we can attach it to the end of our odd list. 

Our edge cases are - an empty linked list, a linked list with only one node, a linked list with only two nodes, a linked list with odd number of nodes, and a linked list with an even number of nodes.

*/

function rearrangeList(head) {
	if (head === null) return null;

	let	odd = head,
		even = head.next,
		evenFirst = even;

	while (true) {
		// no more nodes to add
		// connect the two lists
		if (!odd || !even || !even.next) {
			odd.next = evenFirst;
			break;
		}
		
		// connect odd nodes
		odd.next = even.next;
		odd = even.next;

		// if there are no more even nodes
		// after current odd
		if (odd.next === null) {
			even.next = null;
			odd.next = evenFirst;
			break;
		}

		// connecting even nodes
		even.next = odd.next;
		even = odd.next;
	}
	return head;
}
