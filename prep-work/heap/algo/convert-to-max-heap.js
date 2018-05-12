/*

Trick question - just build a max heap. Don't care about the input.

*/

function covertMaxHeap(arr, n) {
	for (let i = (n-2)/2; i >= 0; i--) {
		maxHeapify(arr, i, n);
}
}

function maxHeapify(arr, i, n) {
	let largest = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;

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

