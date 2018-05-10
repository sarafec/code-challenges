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

function numberOfPaths(m,n) {
	const grid = new Matrix(m, n).build();
	for (let i = 0; i < m; i++) {
		grid[i][0] = 1;
	}
	for (let j = 0; j < n; j++) {
		grid[0][j] = 1;
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			grid[i][j] = grid[i-1][j] + grid[i][j-1];
		}
	}
	console.log(grid[m-1][n-1]);
	return grid[m-1][n-1];
}

numberOfPaths(3,3);