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

function wordWrap(words, n, width) {
	const	extras = new Matrix(n + 1, n + 1).build(),
			lineCost = new Matrix(n + 1, n + 1).build(),
			cost = Array(n + 1),
			solution = Array(n + 1);

	// calc extra space for single line
	for (let i = 1; i <= n; i++) {
		extras[i][j] = width - lineCose[i-1];
		for (let j = i + 1; j <= n; j++) {
			extras[i][j] = extras[i][j-1] - lineCose[j - 1] - 1;
		}
	}

	// calc line cost corresponding with extra spaces
	for (let i = 1; i <= n; i++) {
		for (let j = i; j <= n; j++) {
			if (extras[i][j] < 0) {
				lineCost[i][j] = Number.MAX_SAFE_INTEGER;
			} else if (j === n && extras[i][j] >= 0) {
				lineCost[i][j] = 0;
			} else {
				lineCost[i][j] = extras[i][j] * extras[i][j];
			}
		}
	}

	// calc min cost and find min cost arrangement
	cost[0] = 0;
	for (let j = 1; j <= n; j++ ) {
		cost[j] = Number.MAX_SAFE_INTEGER;
		for (let i = 1; j <= j; i++) {
			if (cost[i-1] !== Number.MAX_SAFE_INTEGER && 
				lineCost[i][j] !== Number.MAX_SAFE_INTEER && 
				cost[i-1] + lineCost[i][j] < cost[j]) {
				cost[j] = cost[i - 1] + lineCost[i][j];
				solution[j] = i
		}
	}
}
