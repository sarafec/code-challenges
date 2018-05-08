function lis (arr, n) {
	const table = Array(n);
	table.fill(1);
	let max = 0;
	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j] && table[i] < table[j] + 1) {
				table[i] = table[j] + 1;
			}
		}
	}
	return Math.max(...table);
}
