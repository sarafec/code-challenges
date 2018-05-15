/*

For our iterative implementation, we'll create three pointers - prev, curr, and next; Then, we'll iterate through the list, making: 
next = curr.next
curr.next = prev
prev = curr
curr = next
Time complexity for this solution is O(n)
Space complexity is O(1)


For our recursive implementation, we'll divide the list into two parts, the first node and the rest of the list. Then, we'll call reverse on the rest of the list, linking the rest to the first node.

Time complexity for the recursive implementation is O(n)

*/

// iterative
function reverse (head) {
	let	prev = null,
		curr = head,
		next = null;
	while (curr !== null) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	head = prev;
}

// recursive
function reverseRec(head) {
	let	first,
		rest;
	
	if (head === null) return;
	
	first = head;
	rest = first.next;

	if (rest === null) return;

	reverseRec(rest);
	first.next.next = first;
	first.next = null;
	head = rest;
}
