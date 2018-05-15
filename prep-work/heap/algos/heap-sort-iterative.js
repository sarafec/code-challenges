/*

Heap Sort is a comparison based sorting technique where we first build a max heap and then swaps the root element with last element and maintains the heap property each time to make it sorted.

*/

function heapSort(arr, n) {
	buildMaxHeap(arr, n);

	for (let i = n - 1; i > 0; i--) {
		swap(arr[0], arr[i]);
		let j = 0;
		let index;
		while (index < i) {
			index = 2 *j + 1;
			if (arr[index] < arr[index + 1] && index < i -1) {
				index++;
			}
			if (arr[j] < arr[index] && index < i) {
				swap(arr[j], arr[index]);
			}
			j = index;
		}
	}
}

function buildMaxHeap(arr, n) {
	for (let i = 1; i < n; i++) {
		if (arr[i] > arr[(i -1)/2]) {
			let j = i;
			while (arr[j] > arr[(j - 1)/2]) {
				swap(arr[j], arr[(j-1]/2]);
				j = (j - 1) /2;
			}
		}
	}
}
