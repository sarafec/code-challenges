/*
Heapsort is a comparison based sorting technique that is similar to selection sort. First, we find the maximum element and place the maximum element at the end. We repeat the same process for remaining elements.

To do heapsort, we'll build a max heap from the input data. The largest item will be stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of the heap by 1. Finally, heapify the root of the tree. 
Repeat all of these steps while the size of the heap is greater than 1.

Heapsort is an in-pace, unstable sort.

The time complexity of heapify is O(log n).
The time complexity of heap sort is O(n log n).

*/

function sort(arr) {
	let n = arr.length;

	// build heap -- rearrange array
	for (let i = n /2 -1; i >= 0; i--) {
		heapify (arr, n, i);
	}

	// one by one, extract an element from heap
	for (let i = n - 1; i >= 0; i--) {
		let temp = arr[0];
		arr[0] = arr[i];
		arr[i] = temp;

		// call max heapify on the reduced heap
		heapify(arr, i, 0);
	}
}

function heapify(arr, n, i) {
	let largest = i;
	let left = (2 * i) + 1;
	let right = (2 * i) + 2;

	if (left < n && arr[left] > arr[largest]) {
		largest = left;
	}

	if (right < n && arr[right] > arr[largest]) {
		largest = right;
	}

	if (largest !== i) {
		let swap = arr[i];
		arr[i] = arr[largest];
		arr[largest] = swap;
		heapify(arr, n, largest);
	}
}
