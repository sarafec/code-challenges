/* Merge k Sorted Linked Lists */
/*

Explanation: There are three strategies we could do - 
1) traverse all lists starting from the second list O(n^2)
2) use min heap O(nk log k)
3) use divide and conquer O(n)

We'll use divide and conquer - we'll pari up k lists and merge 
each pair in linear time. After the first cycle K/2 lists are left.
After second cyucle, K/4 lists are left. Repeat until only one list
is left.

*/

function mergeKLists (arr, last) {
	while (last !== 0) {
		let i = 0,
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
	return arr[0];
}

function sortedMerge(a, b) {
	let result = null;
	if (a === null) {
		return b;
	} else if (b === null) {
		return a;
	}

	if (a.data <= b.data) {
		result = a;
		result.next = sortedMerge(a.next, b);
	} else {
		result = b;
		result.next = sortedMerge(a, b.next);
	}
	return result;
}