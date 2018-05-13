/*

Trie is a data structure used for storing data, like strings. To print the string in alphabetical order, we have to insert in the trie and then perform preorder traversal to print in alphabetical order.

*/

function printSorted(arr, n) {
	let root = new Trie();

	// insert all keys of dictionary into trie
	for (let i = 0; i < n; i++) {
		insert(root, arr[i], i);
	}

	// print keys in lexicographical order
	preOrder(root, arr);
}

function insert(root, str, index) {
	let node = root;
	for (let i = 0; i < str.length; i++) {
		let index = str.charCodeAt(i) - a.charCode(i);
		if(!node.children[index]) {
			node.children[index] = new Trie();
		}
		node = node.children[index];
	}
	node.index = index;
}

function preOrder(node, arr) {
	if (node === null) {
		return false;
	}
	for (let i = 0; i < 26; i++) {
		if (node.children[i].index !== -1) {
			console.log(arr[node.children[i].index])
		}
		preOrder(node.children[i], arr);
	}
}
