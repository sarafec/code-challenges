/*

The brute force solution would be to traverse each list one by one and insert every node of currently traversed list into the result in a sorted way.
Time complexity is O(n^2)

A better solution would be to use a min heap to return a sorted list
The time complexity for this would be O(nk log k)

Another solution is using divide and conquer. It also has a running time of O(nk log k) without the extra space required of a heap.
The idea is to pair up k lists and merge each pair in linear time. After the first cycle, k/2 lists are left. After the second cycle k/4 lists are left and so on, until we only have one list left.

*/

//divide and conquer solution
function mergeKLists(arr, last) {
	while (last !== 0) {
		let	i = 0,
			j = last;

		while (i < j) {
			arr[i] = sortedMerge(arr[i], arr[j]);
			i++;
			j--;

			if (i >= j) {
				last = j;
			}
		}
}
}

// takes two lists in increasing order and merges them
function sortedMerge(a, b,) {
	let result = null;
	if (a === null) return b;
	if (b === null) return a;

	if (a.data <= b.data) {
		result = a;
		result.next = sortedMerge(a.next, b);
	} else {
		result = b;
		result.next = sortedMerge(a, b.next);
	}
	return result;
}
