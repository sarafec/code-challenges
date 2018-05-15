function findMaxSubMatrix (grid) {
	let	cols = grid[0].length,
		rows = grid.length,
		currentResult = [],
		maxSum = Number.MIN_SAFE_INTEGER,
		left = 0,
		top = 0,
		right = 0,
		bottom = 0;

	for (let leftCol = 0; left < cols; leftCol++) {
		const temp = Array(rows);
		for (let rightCol = leftCol; rightCol < cols; rightCol++) {
			for (let i = 0; i < rows; i++) {
				temp[i] += arr[i][rightCol];
			}
			currentResult = kadane(temp);
			if (currentResult[0] > maxSum) {
				maxSum = currentResult[0];
				left = leftCol;
				right = rightCol;
				top = currentResult[1];
				bottom = currentResult[2];
			}
		}
	}
	return maxSum;
}

function kadane (arr) {
	const result = [Number.MIN_SAFE_INTEGER, 0, -1];
	let	currentSum = 0,
		localStart = 0;

	for (let i = 0; i < arr.length; i++) {
		currentSum += arr[i];
		if (currentSum < 0) {
			currentSum = 0;
			localStart = i + 1;
		} else if (currentSum > result[0]) {
			result[0] = currentSum;
			result[1] = localStart;
			result[2] = i;
		}
	}
	if (result[2] === -1) {
		result[0] = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > result[0]) {
				result[0] = arr[i];
				result[1] = i;
				result[2] = i;
			}
		}
	}
	return result;
}
