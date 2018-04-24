function binarySearch(arr, value, left, right) {
	if (left > right) return false;

	let mid = Math.floor((left + right)/2);

	if (arr[mid]=== value) {
		return true;
	} else if (arr[mid] > value) {
		binarySearch(arr, value, left, mid - 1);
	} else {
		binarySearch(arr, value, mid + 1, right);
	}
}
