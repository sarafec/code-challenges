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

function knapsack(weight, wtArr, val, n) {
	const knapsack = new Matrix(n + 1, weight + 1).build();
	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= weight; j++) {
			if (i === 0 || j === 0) {
				knapsack[i][j] = 0;
			} else if (wtArr[i-1] <= weight) {
				knapsack[i][j] = Math.max(val[i-1] + knapsack[i-1][j - wtArr[i-1]], knapsack[i-1][j]);
			} else {
				knapsack[i][j] = knapsack[i-1][weight];
			}
		}
	}
	return knapsack[n][weight];
}
