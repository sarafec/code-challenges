function minCoins(coins, m, val) {
	const table = Array(val + 1);
	table[0] = 0;
	table.fill(Number.MAX_SAFE_INTEGER, 1);
	for (let i = 0; i <= val; i++) {
		for (let j = 0; j < m; j++) {
			if (coins[j] <= i) {
				let subResult = table[i - coins[j]];
				if (subResult !== Number.MAX_SAFE_INTEGER && subResult + 1 < table[i]) {
					table[i] = subResult + 1;
				}
		}
	}
	return table[val]
};