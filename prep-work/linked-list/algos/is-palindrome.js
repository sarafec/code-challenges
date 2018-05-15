/*

There are a number of different solutions. We can use a stack, we can reverse the list, or we can use recursion.

We'll implement the reversing and recursion methods.

In our reverse method, we'll get the mid node of the linked list. Then, we'll reverse the second half. And check if the first and second are the same.
Running time is O(n)
Space complexity is O(1)

In the recursive method, we'll use a left and right pointer. We'll move the pointers using recursion and check if the sublist is a palindrome and if the value at the left and right are matching. If both conditions are true, then the list is a palindrome.
The benefit of using recursion is that we are using the stack as a container. 

*/

// recursive 
function isPalindrome(head) {
	isPalindromeUtil (head, head);
}

function isPalindromeUtil(left, right) {
	if (right === null) return true;

	let isPal = isPalindromeUtil(left, right.next);
	if (isPal === false) return false;

	let isPal2 = right.data === left.data;
	
	left = left.next;
	
	return isPal2;
}

// reverse the list solution
function isPalindromeRev(head) {
	let slowPtr = head,
		fastPtr = head,
		secondHalf,
		prevOfSlowPtr = head,
		midNode = null,
		result = true;

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
		reverse(secondHalf);
		result = compareList(head, secondHalf);

		reverse(secondHalf);
		
		if (midNode !== null) {
			prevOfSlowPtr.next = midNode;
			midNode.next = secondHalf;
		} else {
			prevOfSlowPtr.next = secondHalf;
		}
	}
	return result;
}

function reverse(head) {
	let prev = null,
		curr = head,
		next;

	while (curr !== null) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	head = prev;
}

function compareList (head1, head2) {
	let temp1 = head1;
	let tempt2 = head2;

	while (temp1 && temp2) {
		if (temp1.data === temp2.data) {
			temp1 = temp1.next;
			temp2 = temp2.next;
		} else {
			return false;
		}
	}
	if (temp1 === null && temp2 === null) {
		return true;
	}
		return false;	
}
