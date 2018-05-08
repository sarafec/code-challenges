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


function editDistance(str1, str2, m, n) {
	const matrix = new Matrix(m + 1, n + 1).build();
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i === 0) {
				matrix[i][j] = j;
			} else if (j === 0) {
				matrix[i][j] = i;
			} else if (str1.charAt(i-1) === str2.charAt(j - 1)) {
				matrix[i][j] = matrix[i-1][j-1];
			} else {
				matrix[i][j] = Math.min(matrix[i][j-1],
								matrix[i-1][j],
								matrix[i-1][j-1]);
			}
		}
	}
	return matrix[m][n];
}
