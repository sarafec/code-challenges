/*

In this problem we'll check whether the binary tree contains a duplicate subtree with a size of 2 or more.

A simple solution would be if we pick ever node of the tree and try to find if any subtree of the given tree is present in the tree, which is identical with that subtree. 
This is nearly the same solution as when we checked if a binary tree contains a given subtree.

A more efficient solution involves using tree serialization and hashing.
The idea is that we'll serialize the subtrees as strings and store the strings in a hash table. Once we find a serialized tree that already exists in our hash table, we'll return true.
Running time O(n), where n are the number of subtrees

*/

const MARKER = '$';
const subtrees = new Set();

function findDupSub(root) {
	let str = "";
	if (root === null) {
		return str + MARKER;
	}

	let leftStr = findDupSub(root.left);
	if (leftStr === str) return str;

	let rightStr = findDupSub(root.right);
	if (rightStr === str) return str;
	
	// serialize current subtree
	str = str + root.key + leftStr + rightStr;

	if (str.length > 3 && subtree.has(str)) {
		return "";
	}
	subtrees.add(str);
	return str;
}
