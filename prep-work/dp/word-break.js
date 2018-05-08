function wordBreak(str) {
	let size = str.length;
	if (size === 0) return true;
	const table = Array(size + 1);
	table.fill(false);
	for (let i = 1; i <= size; i++) {
		if (table[i] === false && dictContains(str.substr(0, i))) {
			table[i] = true;
		}
		if (table[i] === true) {
			if (i === size) {
				return true;
			}
			for (let j = i + 1; j <= size; j++) {
				if (table[j] === false && dictContains(str.substr(i, j - i))) {
					table[j] = true;
				}
				if (j === size && table[j] === true) {
					return true;
				}
			}
		}
	}
	return false;
}
