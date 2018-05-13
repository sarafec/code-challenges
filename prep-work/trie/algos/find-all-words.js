/*

This problem can be solved using a graph dfs technique. However, it may be more efficient to use a trie.

To do this we'll create an empty trie and insert all words into our trie. Next, we'll only choose those characters which are the children at the root of the trie. Then, we search then word in the trie.

*/

function findWords (boggle, root) {
	let	m = boogle.length,
		n = boggle[0].length;
		pChild = root,
		str = "";
	const visited = new Matrix(m, n);

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (pChild.child[boggle[i].charCodeAt(j) - 'a'.charCodeAt(0)] !== null) {
				str = str + boggle[i][j];
				searchWord(p.Child.child[boggle[i].charCodeAt(j) - 'a'.charCodeAt(0)], boggle, i, j, visited, str);
				str = "";
			}
		}
	}
}

function searchWord(root, boggle, i, j, visited, str) {
	if (root.leaf === true) {
		console.log(str);
	}

	if (isSafe(i, j, visited)) {
		visited[i][j] = true;
		for (let k = 0; k < root.child.length; k++) {
			if (root.child[k] !== null) {
				let ch = charFromNum(k);
				if (isSafe(i+1,j+1,visited) && boggle[i+1][j+1] == ch) {
					searchWord(root.Child[K],boggle,i+1,j+1, visited,str+ch); 
				}
				if (isSafe(i, j+1,visited) && boggle[i][j+1] == ch) { 
					searchWord(root.Child[K],boggle,i, j+1, visited,str+ch); 
				}
				if (isSafe(i-1,j+1,visited) && boggle[i-1][j+1] == ch) {
					searchWord(root.Child[K],boggle,i-1, j+1, visited,str+ch);
				}
				 if (isSafe(i+1,j, visited) && boggle[i+1][j] == ch) { 
					searchWord(root.Child[K],boggle,i+1, j, visited,str+ch);
				} 
				if (isSafe(i+1,j-1,visited) && boggle[i+1][j-1] == ch){ 
					searchWord(root.Child[K],boggle,i+1, j-1, visited,str+ch);
				} 
				if (isSafe(i, j-1,visited)&& boggle[i][j-1] == ch){ 
					searchWord(root.Child[K],boggle,i,j-1, visited,str+ch); 
				}
				if (isSafe(i-1,j-1,visited) && boggle[i-1][j-1] == ch) {
					searchWord(root.Child[K],boggle,i-1, j-1, visited,str+ch); 
				}
				if (isSafe(i-1, j,visited) && boggle[i-1][j] == ch) { 
					searchWord(root.Child[K],boggle,i-1, j, visited,str+ch);
				}
			}
		}
		visited[i][j] = false;
	}
}

// todo: in our current implementation m and n are not defined in or passed to the function
function isSafe(i, j, visited) {
	return (i >= 0 && i < m && j >= 0 && j < n && !visited[i][j]);
}
