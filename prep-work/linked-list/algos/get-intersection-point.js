/*

There are a number of ways we could solve this - we could use two loops, we could mark visited nodes (requires us to modify linked list node), we could leverage the difference in node counts, we could reverse the first list and compare, or we could use hashing.

Using difference counts, we could get the count of nodes in the first, then get the count of nodes in the second list. Then, get the difference of the count Math.abs(count1 - count2). Now, traverse the longer list from the first, until we reach that count difference. 
From that point, the list have an equal number of nodes. We can easily traverse the lists in parallela until we come across  the common node.
To get the common node, we need to compare the addresses of the node.
The running time of this implementation is O(m + n)

In the hash solution (which we won't implement), we need to find the common nodes of the two linked list. So, we hash all nodes of the first list and then check the second list. 
The running time is O(m + n), we'll need to traverse both lists
The space complexity is O(m), we'll need to store one list

*/

function getIntersectionNode(head1, head2) {
	let count1 = getCount(head1);
	let count2 = getCount(head2);
	
	let diff = Math.abs(count1 - count2);
	return _getIntersectionNode(diff, head1, head2);
}

function _getIntersectionNode(diff, node1, node2) {
	let curr1 = node1;
	let curr2 = node2;
	for (let i = 0; i < diff; i++) {
		if (curr1 === null) {
			return -1;
		}
		curr1 = curr1.next;
	}
	
	while (curr1 !== null && curr2 !== null) {
		if (curr1.data === curr2.data) {
			return curr1.data;
		}
		curr1 = curr1.next;
		curr2 = curr2.next;
	}
	return -1;
}

function getCount(node) {
	let curr = node;
	let count = 0;
	while (curr !== null) {
		count++;
		curr = curr.next;
	}
	return count;
}
