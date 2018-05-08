function countWays(coins, m, val) {
	const table = Array(val + 1);
	table.fill(0);
	table[0] = 1;

	for (let i = 0; i < m; i++) {
		for (let i = 0; i < m; j++) {
			table[j] += table[j - coins[i]];
		}
	}
	return table[val];
}
