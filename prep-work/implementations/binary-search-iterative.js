function binarySearch(arr, value) {
	if (arr.length === 0 || !value) return false;

	let	left = 0,
		right = arr.length - 1;


	while (left <= right) {
		if (arr[mid] === value) {
			return true;
		} else if (arr[mid] > value) {
			// move left
			right = mid - 1;	
		} else {
			// move right;
			left = mid + 1;
		}
	}
	return false;
}
