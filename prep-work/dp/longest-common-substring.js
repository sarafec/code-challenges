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

function lcSubstr(str1, str2, m, n) {
	const matrix = new Matrix(m + 1, n + 1).build();
	let result = 0;
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i === 0|| j === 0) {
				matrix[i][j] = 0;
			} else if (str1.charAt(i-1) === str2.charAt(j-1)) {
				matrix[i][j] = matrix[i-1[j-1] + 1;
				result = Math.max(result, matrix[i][j]);
			} else {
				matrix[i][j] = 0;
			}
		}
	}
	return result;
}
