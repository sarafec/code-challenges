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

function lps (seq) {
	let size = seq.length;
	const matrix = new Matrix(size, size).build();
	for (let i = 0; i < size; i++) {
		matrix[i][i] = 1;
	}
	for (let cl = 2; cl <= size; cl++) {
		for (let i = 0; i < size - cl + 1; i++) {
			j = i + cl - 1;
			if (seq.charAt(i) === seq.charAt(j) && cl === 2) {
				matrix[i][j] = 2;
			} else if (seq.charAt(i) === seq.charAt(j)) {
				matrix[i][j] = matrix[i + 1][j - 1] + 2;
			} else {
				matrix[i][j] = Math.max(matrix[i][j-1],
								matrix[i + 1][j]);
			}
		}
	}
	return matrix[0][size - 1];
}
