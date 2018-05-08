class Matrix {
	constructor (rows, cols, val) {
		this.rows = rows;
		this.cols = cols;
		this.val = val;
	}

	build () {
		const matrix = Array(this.rows);
		for (let i = 0; i < matrix.length; i++) {
			matrix[i] = Array(this.cols);
			matrix[i].fill(this.val)
		}
		return matrix;
	}
}

function isSusbetSum(set, n, sum) {
	const subset = new Matrix (n + 1, sum + 1);
	for (let i = 0; i <= n; i++) {
		subset[i][0] = true;
	}
	for (let i = 0; i <= sum; i++) {
		subset[0][i] = false;
	}
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= sum; j++) {
			if (j < set[i-1]) {
				subset[i][j] = subset[i-1][j];
			}
			if (j >= set[i-1]) {
				subset[i][j] = subset[i-1][j] || subset[i-1][j-set[i-1]];
			}
		}
	}
	return subset[n][sum];
}
