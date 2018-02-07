/*

sorting method: Merge Sort

running time - n log n

work left to do:
1 - write explaination
2 - test

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