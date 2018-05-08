function maxSum(val, n) {
	if (n === 0) return 0;
	if (n === 1) return val[0];
	if (n === 2) return Math.max(val[0], val[1]);
	const table = Array(n);
	table[0] = val[0];
	table[1] = Math.max(val[0], val[1]);
	for (let i = 2; i < n; i++) {
		table[i] = Math.max(val[i] + table[i-2], table[i-1]);
	}
	return table[n-1];
}
