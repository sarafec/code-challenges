function maxSum(arr, n) {
	let max = 0;
	const table = Array(n);
	for (let i = 0; i < n; i++) {
		table[i] = arr[i];
	}
	
	// compute max sum values
	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j] && table[i] < table[j] + arr[i]) {
				table[i] = table[j] + arr[i];
			}
		}
	}
	
	console.log(Math.max(...table));
	return Math.max(...table);
}

const arr = [1, 2, 3];
const arrLength = arr.length;

maxSum(arr, arrLength);