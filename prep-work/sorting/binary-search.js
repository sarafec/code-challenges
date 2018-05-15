/*

The idea is to ignore half of the element after one comparison.
We'll find the mid point, and compare our given value with the mid value. If not, we'll decide that it can only lie above or below the mid point. So, we'll recur for that side.

Or we can just have a low and high pointer and set those variables after comparison.

Running time - O(log n)

*/

// recursive
function binarySearch(arr, left, right, val) {
	if (right >= left) {
		let mid = Math.floor((left + right)/2);

		if (arr[mid] === val) return mid;

		if (arr[mid] > val) {
			return binarySearch(arr, left, mid-1, val);
		}
	
		return binarySearch(arr, mid+1, right, val);
	}
	return -1;
}

// iterative
function binarySearchIter(arr, val) {
	let	left = 0,
		right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right)/2);

		if (arr[mid] === val) {
			return mid;
		}

		if (arr[mid] < val) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}
