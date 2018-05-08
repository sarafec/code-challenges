function maxSum(arr, n) {
	let max = 0;
	const table = Array(n);
	for (let i = 0; i < n; i++) {
		table[i] = arr[i];
	}
	
	// compute max sum values
	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j] && table[i] < table[j] + arr[i) {
				table[i] = table[j] + table[i]
			}
		}
	}
	
	return Math.max(...table);
}
