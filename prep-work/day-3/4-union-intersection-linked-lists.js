/* Union and Intersection of Two Linked Lists */

/*

Explanation: We'll use hashing.
For our union method, we'll initialize a result list and an empty hash table.
Then, we'll traverse both lists one by one, for each element being visited, 
we'll see if our item is present in the hash table. If the element is not present,
then we'll insert the element into the result list. If the element is present,
we'll ignore it.

For our intersection method, we'll initialize a result list and an empty hash table.
We'll traverse the first list. For each element in that list, we'lll insert it into
the hash table. Then, we'll traverse the second lists and see if our element exists
in our hash table. If the element is present, we'll add the element to our result
list. If the element is not present, we'll ignore it.

Alternatively - We could use merge sort. We could sort the lists and then traverse the sorted lists
to get the union and intersection.
Running Time - O(mlogm + nlogn)

*/

function getIntersection(head1, head2) {
	const hashTable = new HashTable();
	const result = new LinkedList();
	let node1 = head1;
	let node2 = head2;

	while (node1.next !== null) {
		hashTable.add(node1.data) 
		node1 = node1.next;
	}

	while (node2.next !== null) {
		if (hashTable.contains(node2.data)) {
			result.add(node2);
		}
		node2 = node2.next;
	}
	return result;
}

function getUnion(head1, head2) {
	const hashTable = new HashTable();
	const result = new LinkedList();
	let node1 = head1;
	let node2 = head2;

	while (node1.next !== null) {
		if (!hashTable.contains(node1.data)){
			hashTable.add((node1.data));
		}
		node1 = node1.next;
	}

	while (node2.next !== null) {
		if (!hashTable.contains(node2.data)){
			hashTable.add((node2.data));
		}
		node2 = node2.next;
	}

	for (let entry of hashTable) {
		result.add(entry);
	}

	return result;
}