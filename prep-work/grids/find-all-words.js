/*

The idea is to consider every character as a starting character and find all words starting with it. We do dfs starting from every cell. We keep track of visited cells to make sure that a cell is consiered only once in a word.

*/

function findWords(boggle, m, n) {
	const visited = new Matrix(m, n, false);
	let str = "";
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			findWordsUtil(boggle, visited, i, j, str, m, n);
		}
	}
}

function findWordsUtil(boggle, visited, i, j, str, m, n) {
	visited[i][j] = true;
	str = str + boggle[i][j];
	if (isWord(str)) {
		console.log(str);
	}

	for (let row = i - 1; row <= i + 1 && row < m; row++) {
		for (let col = j - 1; col <= j + 1 && col < n; col++) {
			if (row >= 0 && col >= 0 && !visited[row][col]) {
				findWordsUtil(boggle, visited, row, col, str, m, n);
			}
		}
	}

	str = str.slice(str.length - 1);
	visited[i][j] = false;
}
