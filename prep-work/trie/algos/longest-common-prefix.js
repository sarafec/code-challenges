/*

There are a number of ways to solve this problem. There is word by word matching, character by character matching, divide and conquer, and binary search. The approach we'll take here is using a trie.

To do this, we'll insert all of the words one by one in a trie. Next we'll walk the trie. We will go deeper if we find a node having more than 1 child or 0 children. 
This is because the characters (nodes in the trie) which are present in the longest common prefix must be the single child of its parent. 

*/

function commonPrefix(arr, n) {
	let root = new TrieNode();
	constructTrie(arr, n);
	return walkTrie(root);
}

function constructTrie(arr, n) {
	for (let i = 0; i < n; i++) {
		insert(arr[i]);
	}
	return;
}

function walkTrie(root) {
	let	pCrawl = root,
		index = 0,
		prefix = "";

	while(countChildren(pCrawl) === 1 && pCrawl.isLeaf === false) {
		pCrawl = pCrawl.children[index];
		// add character to prefix based on value of index
		prefix += addToPrefix(index);
	}
	return prefix;
}

function insert(key) {
	let	length = key.length,
		index,
		pCrawl = root;

	for (let level = 0; level < length; level++) {
		index = key.charCodeAt(level) - 'a'.charCodeAt(0);
		if (pCrawl.children[index] === null) {
			pCrawl.children[index] = new TrieNode();
		}
		pCrawl = pCrawl.children[index];
	}
	pCrawl = pCrawl.children[index];	
}

function countChildren(node) {
	let count = 0;
	for (let i = 0; i < ALPHABET_SIZE; i++) {
		if (node.children[i] !== null) {
			count++;
			index = i;
		}
	}
	return count;
}

