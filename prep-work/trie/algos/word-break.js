/*

This problem can be solved using a dynamic programming solution. However, you can extend that solution using a trie.

*/

function wordBreak(str, root) {
	let length = str.length;

	if (length === 0) return true;
	for (let i = 1; i <= length; i++) {
		if (search(root, str.substr(0, i)) && wordBreak(str.substr(i, length-1), root)) {
			return true;
		}
	}
	return false;
}

function search(root, key) {
	let pCrawl = root;
	for (let i = 0; i < key.length; i++) {
		let index = key.charCodeAt(i) - 'a'.charCodeAt(0);
		if(!pCrawl.children[index]) {
			return false;
		}
		pCrawl = pCrawl.children[index];
	}
	return (pCrawl !== null && pCrawl.isEndOfWord);
}
