/*

Quicksort is a divide and conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot.

Quicksort sort centers around its partition() method. Given an array and an element x as pivot, we'll put x at its correct position in the sorted array and put all smaller elements before x and put all greater elements after x. This is done in linear time.

Running time in the worst case is O(n^2), but this is would mean that array is already sorted in increasing or decreasing order.

In the best case it is O(n log n), this would occur if the partition picks the middle element.

The average case is (n log n).

You might consider using quick sort over merge sort, if you want to do a sort in place.

*/

function sort (arr, low, high) {
	if (low < high) {
		let part = partition (arr, low, high);

		// recursively sort elements before the partition 
		// and after the partition
		sort (arr, low, part-1);
		sort (arr, part + 1, high);
	}
}

function partition(arr, low, high) {
	let	pivot = arr[high],
		i = low - 1;

	for (let j = low; j < high; j++) {
		if (arr[j] <= pivot) {
			i++;
			// swap arr[i] and arr[j]
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}

	let temp = arr[i+1];
	arr[i+1] arr[high];
	arr[high] = temp;
	return i+1;
}
