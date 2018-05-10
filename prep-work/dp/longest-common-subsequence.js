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

function lcs (charArr1, charArr2, m, n) {
	const matrix = new Matrix (m + 1, n + 1).build();
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i === 0 || j === 0) {
				matrix[i][j] = 0;
			} else if (charArr1[i-1] === charArr2[j-1]) {
				matrix[i][j] = matrix[i-1][j-1] + 1;
			} else {
				matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
			}
		}
	}
	console.log(matrix[m][n]);
	return matrix[m][n];
}

const str1 = "abcdgh";
const str2 = "aedfhr";
const charArr1 = str1.split("");
const charArr2 = str2.split("");
const charArrLength1 = charArr1.length;
const charArrLength2 = charArr2.length;

lcs(charArr1, charArr2, charArrLength1, charArrLength2);