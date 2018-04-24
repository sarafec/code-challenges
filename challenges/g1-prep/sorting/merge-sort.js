function merge(arr, left, mid, right) {
	// index pointer variables
	let i, j, k;
	// length of left  subarray
	let n1 = mid - left + 1;
	// length of right subarray
	let n2 = right - mid;

	// temp arrays for subarrays
	let leftArray = Array(n1);
	let rightArray = Array(n2);

	// add items to temp subarrays
	for (i = 0; i < n1; i++) {
		leftArray[i] = arr[left + i];
	}
	for (j = 0; j < n2; j++) {
		rightArray[j] = arr[mid + 1 + j];
	}

	// merge temp arrays back into arr[l..r]
	i = 0; // initial index of first subarray
	j = 0; // initial index of second subarray
	k = left; // initial index of merged array

	while (i < n1 && j < n2) {
		if (leftArray[i] <= rightArray[j]) {
			arr[k] = leftArray[i];
			i++;
		} else {
			arr[k] = rightArray[j];
			j++;
		}
		k++;
	}

	// copy the remaining elements of leftArray, if there are any
	while (i < n1) {
		arr[k] = leftArray[i];
		i++;
		k++;
	}

	// copy the remaining elements of rightArray, if there are any
	while (j < n2) {
		arr[k] = rightArray[j];
		j++;
		k++;
	}
}

// recursively call mergeSort until every item is a single item array
function mergeSort(arr, left = 0, right = arr.length) {
	if (left < right) {
		let mid = Math.floor((left + right)/2);

		mergeSort(arr, left, mid);
		mergeSort(arr, mid+1, r);

		merge(arr, left, mid, right);
	}
}