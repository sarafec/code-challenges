/* Find Longest Common Prefix - Using Trie */

/*

Explanation: Insert all the words, one by one, into a trie.
Then, traverse the trie, until we have a node that has more than
1 child.

The characters (nodes in trie) which are present in the longest common
prefix must be the single child of its parent.

Running Time: O(n)
Space Complexity: O(n)

*/

function commonPrefix(arr, size) {
	root = getNode();
	constructTrie(arr, size, root);
	return walkTrie(root);
}

function constructTrie(arr, size, root) {
	for (let i = 0; i < size; i++) {
		insert(root, arr[i]);
	}
	return;
}

function walkTrie(root) {
	let pCrawl = root,
		index,
		prefix;

	while (countChildren(pCrawl, index) === 1 && pCrawl.isLeaf == false) {
		pCrawl = pCrawl.children[index];
		prefix += 'a' + index;
	}
	return prefix;
}

/** -- UTILITY FUNCTIONS -- **/

function Node() {
	this.isLeaf = false;
	this.children = Array(26);
}

function getNode() {
	pNode = new Node();
	if (pNode) {
		let i;
		pNode.isLeaf = false;

		for (let i = 0; i < 26; i++) {
			pNode.children[i] = null;
		}

		return pNode;
	}
}

function insert(root, key) {
	let length = key.length;
	let index;

	let pCrawl = root;

	for (let level = 0; level < length; level++) {
		index = charToIndex(key[level]);
		if (!pCrawl.children[index]) {
			pCrawl.children[index] = getNode);
		}
		pCrawl = pCrawl.children[index];
	}

	pCrawl.isLeaf = true;
}

function countChildren(node, index) {
	let count = 0; 
	for (let i = 0; i < 26; i++) {
		if (node.children[i] !== null) {
			count++;
			index = i;
		}
	}
	return count;
}