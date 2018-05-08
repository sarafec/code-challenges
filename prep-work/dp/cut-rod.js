function cutRod(prices, rodLength) {
	const table = Array(n + 1);
	table[0] = 0;
	for (let i = 1; i <= rodLength; i++) {
		let maxVal = Number.MIN_SAFE_INTEGER;
		for (let j = 0; j < i; j++) {
			maxVal = Math.max(maxVal, prices[j] + table[i - j - 1]);
		}
		table[i] = maxVal;
	}
	return table[rodLength];
}
