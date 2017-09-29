/*
source: rosetta code
problem statement:
Write a general purpose function to do merge sort

input - array of numbers
output - sorted array of numbers

running time - n log n
*/

function merge(left, right, arr) {
	let count = 0;

	while (left.length && right.length) {
		arr[count++] = (right[0] < left[0]) ? right.shift() : left.shift();
	}

	while (left.length) {
		arr[count++] = left.shift();
	}

	while (right.length) {
		arr[count++] = right.shift();
	}
}

function mergeSort(arr) {
	let len = arr.length;

	if (len === 1) { return; }

	let mid = Math.floor(len / 2),
		left = arr.slice(0, mid),
		right = arr.slice(mid);

	mergeSort(left);
	mergeSort(right);
	merge(left, right, arr);
}

let arr = [1, 4, 5, 6, 7, 8, 3, 2, 9];
mergeSort(arr);
console.log(arr);