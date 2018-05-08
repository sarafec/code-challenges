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

function maxProfit(prices, n, k) {
	const profitGrid = new Matrix(k + 1, n + 1).build();
	for (let i = 0; i <= k; i++) {
		profitGrid[i][0] = 0;
	}
	for (let j = 0; j <= n; j++) {
		profitGrid[0][j] = 0;
	}
	for (let i = 1; i <= k; i++) {
		let prevDiff = Number.MIN_SAFE_INTEGER;
		for (let j = 1; j < n; j++) {
			prevDiff = Math.max(prevDiff, profitGrid[i-1][j-1] - price[j-1]);
			profitGrid[i][j] = Math.max(profitGrid[i][j-1], price[j] + prevDiff);
		}
	}
	return profitGrid[k][n-1];
}
