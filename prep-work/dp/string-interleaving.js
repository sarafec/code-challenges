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

function isInterleaved (str1, str2, str3) {
	let m = str1.length;
	let n = str2.length;
	const grid = new Matrix(m + 1, n + 1, false).build();
	if (m + n !== str3.length) {
		return false;
	}
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i === 0 && j === 0) {
				grid[i][j] = true;
			} else if (i === 0 && str2.charAt(j-1) === str3.charAt(j-1)) {
				grid[i][j] = grid[i][j-i];
			} else if (str1.charAt(i-1) === str3.charAt(i + j - 1)
					&& str2.charAt(j - 1) === str3.charAt(i + j - 1)){
				grid[i][j] = grid[i-1][j] || grid[i][j-1];
			}
		}
	}
	return grid[m][n]
}
