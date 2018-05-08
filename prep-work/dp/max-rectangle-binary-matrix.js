function maxRect (rows, cols, arr) {
	let result = maxHist(rows, cols, arr[0]);
	for (let i = 1; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (arr[i][j] === 1) {
				arr[i][j] += arr[i-1][j];
			}
		}
		result = Math.max(result, maxHist(rows, cols, arr[i]));
	}
	return result;
}

// note - won't run unless we define stack structure
function maxHist (rows, cols, rowOfMatrix) {
	const result = new Stack();
	let	topVal,
		maxArea = 0,
		area = 0,
		i = 0;
	while (i < cols) {
		if (result.empty() || rowOfMatrix[result.peek()] <= rowOfMatrix[i]) {
			result.push(i++);
		} else {
			topVal = rowOfMatrix[result.peek()];
			result.pop();
			area = topVal * i;
			if (!result.empty()) {
				area = topVal * (i - result.peek() -1);
			}
			maxArea = Math.max(area, maxArea);
		}
	}
	while(!result.empty()) {
		topVal = rowOfMatrix[result.peek()];
		result.pop();
		area = topVal * i;
		if (!result.empty()) {
			area = topVal * (i - result.peek() - 1);
		}
		maxArea = Math.max(area, maxArea);
	}
	return maxArea;
}

