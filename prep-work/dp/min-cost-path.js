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

function minCost(cost, m, n) {
	const matrix = new Matrix(m + 1, n + 1).build();
	matrix[0][0] = cost[0][0];
	for(let i = 1; i <= m; i++) {
		matrix[i][0] = matrix[i-1][0] + cost[i][0];
	}
	for (let j = 1; j <= n; j++) {
		matrix[0][j] = matrix[0][j-1] + cost[0][j];
	}
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			matrix[i][j] = Math.min(matrix[i-1][j-1], matrix[i-1][j], matrix[i][j-1]) + cost[i][j];
		}
	}
	console.log(matrix[m][n]);
	return matrix[m][n];
}

const grid = [[1,2,3], [4,8,2], [1,5,3]];
// todo: why doesn't it have to be minus 1
// could I just change the conditionals?
const rowLength = grid.length - 1;
const colLength = grid[0].length - 1;

minCost(grid, rowLength, colLength);