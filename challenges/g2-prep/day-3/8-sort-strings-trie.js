/* Sort an Array of Strings using a Trie */

/*

Explanation: We'll insert into the trie and the perform preorder traversal
to print the strings in alphabetical order.

*/

const MAX_CHAR = 26;

function printSorted(arr) {
	const root = new Trie();

	for(let i = 0; i < arr.length; i++) {
		insert(root, arr[i], i);
	}

	// print
	preOrder(root, arr);
}


function insert(root, str, index) {
	let node = root;
	for (let i = 0; i < str.length; i++) {
		let index = strcharCodeAt(i);

		if (!node.child[index]) {
			node.child[index] = new Trie();
		}

		node = node.child[index];
	}
	node.index = index;
}


function preOrder(node, arr) {
	if (node === null) return false;

	for (let i = 0; i < MAX_CHAR; i++) {
		if (node.child[i] !== null) {
			if (node.child[i].index != -1) {
				console.log(arr[node.child[i].index]);
			}
			preOrder(node.child[i], arr);
		}
	}
}

