/* Check if Singly Linked List is a Palidnrome */

/*

Explanation: You could use a stack to store your nodes and then compare.
Alternatively, you could reverse the second half of the list and then compare to the first half.

*/

function isPalindrome(head) {
	let slowPtr = head,
		fastPtr = head,
		prevOfSlowPtr = head;

	let midNode = null;
	let res = true;

	if (head !== null && head.next !== null) {
		while (fastPtr !== null && fastPtr.next !== null) {
			fastPtr = fastPtr.next.next;
			prevOfSlowPtr = slowPtr;
			slowPtr = slowPtr.next;
		}

		if (fastPtr !== null) {
			midNode = slowPtr;
			slowPtr = slowPtr.next;
		}

		secondHalf = slowPtr;
		prevOfSlowPtr.next = null;
		// note: these reverse calls don't work, you'll need to add in parameters that make sense
		reverse();
		res = compareList(head, secondHalf);
		reverse();

		if (midNode !== null) {
			prevOfSlowPtr.next = midNode;
			midNode.next = secondHalf;
		} else {
			prevOfSlowPtr.next = secondHalf;
		}
	}
	return res;
}

function reverse() {
	let prev = null,
		current = secondHalf,
		next;

		while (current !== null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		secondHalf = prev;
}


function compareList (head1, head2) {
	let temp1 = head1,
		temp2 = head2;

	while (temp1 !== null && temp2 !== null) {
		if (temp1.data === temp2.data) {
			temp1 = temp1.next;
			temp2 = temp2.next;
		} else {
			return false;
		}

		if (temp1 === null && temp2 === null) {
			return true;
		}

		return false;
	}
}