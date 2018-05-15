/*

Brute force - iterate through the range of integers and find the number of trailing zeros of all numbers. Print the numbers with n trailing zeros.

A more efficient approach uses binary search. We use binary search for all numbers in the range and get the first number with n trailing zeros. Find all the numbers with m trailing zeros after that.

*/

function binarySearch(num) {
	let low = 0;
	let high = 1000000;

	while (low < high) {
		let mid = Math.floor((low + high)/2);
		let count = trailingZeros(mid);
		if (count < num) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}

	let result = Array(1000);
	let k = 0;
	while (trailingZeros(low) === num) {
		result[k] = low;
		k++;
		low++;
	}

	for (let i = 0; i < k; i++) {
		console.log(result[i]);
	}
}

function trailingZeros(num) {
	let count = 0;
	while (num > 0) {
		num /= 5;
		count += num;
	}
	return count;
}
