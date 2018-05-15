/*

We'll reverse the first sublist of k. While reversing, we'll keep track of the next node and the previous node. The pointer to the next node will be next and the pointer to the prev node will be prev.
Then well recursively call for the rest of the list, linking the two sublist. 
Lastly, we'll return prev, where prev is the new head of the list.
Running time is O(n)

*/

function reverse(head, k) {
	let	curr = head,
		next = null,
		prev = null,
		count = 0;

	while (count < k && curr !== null) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
		count++;
	}

	if (next !== null) {
		head.next reverse(next,k);
	}
	return prev;
}
