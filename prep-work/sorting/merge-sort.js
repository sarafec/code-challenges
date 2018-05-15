/*

Merge sort is a divide and conquer alogirhm. It divides the input array into two halves. It calls itself for those two halves and then merges the two sorted halves.
It uses a helper merge() function to merge the two halves.

The running time is O(n log n)
The space complexity is O(n)

*/

function sort (arr, left, right) {
	if (left < right) {
		let mid = Math.floor(left + right)/2;
		sort(arr, left, mid);
		sort(arr, mid+ 1, right);

		merge(arr, left, mid, right);
	}
}

function merge(arr, left, mid, right) {
	let size1 = mid - left + 1;
	let size2 = right - mid;

	const leftArr = Array(size1);
	const rightArr = Array(size2);
	
	// copy data into arrays
	for (let i = 0; i < size1; i++) {
		leftArr[i] = arr[left + i];
	}
	for (let i = 0; i < size2; i++) {
		rightArr[j] = arr[mid + 1 + j];
	}

	// merge temp arrays
	let	i = 0,
		j = 0,
		k = 1;

	while (i < size1 && j < size2) {
		if (leftArr[i] <= rightArr[j]) {
			arr[k] = leftArr[i];
			i++;
		} else {
			arr[k] = rightArr[j];
			j++;
		}
		k++;
	}

	// if necessary, copy remaining elements of leftArr
	while (i < size1) {
		arr[k] = leftArr[i];
		i++;
		j++;
	}

	// if necessary, copy remaining elements of rightArr
	while (j < size2) {
		arr[k] = rightArr[j];
		j++;
		k++;
	}
}
