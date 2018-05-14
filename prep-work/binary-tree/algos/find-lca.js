/*

The lowest common ancestor of two nodes is defined as the lowest node in the tree that has both node1 and node2 as descendents. We will assume a node can be a descendant of itself.

Computation of the lowest common ancestor may be useful as part of a procedure for determining the distance between a pair of nodes in a tree.

The distance from node1 and node2 can be computed as the distance from the root to node1, plus the distance from the root to node2 minus twice the distance from the root to their lowest common ancestor.

Unlike finding the lca of a bst, we can't use properties of the binary tree to help us. We'll have to use other solutions.

One option is to store the root to n1 and root to n2 in path arrays.
Then, we'll traverse both paths till the values in the array are the same. Return the common element just before the mismatch. 
The running time is O(n).
The space complexity is O(n), in the case of the skewed tree.

Another option would require us to only do one traversal versus three traversals (and the additional space needed for the path arrays).
Assuming our target nodes are present in our binary trees, we can traverse the tree starting from the root.
If either of our keys match the root node, then the root is our LCA.
If the root doesn't match, then we'll recur for left and right subtree.
The node which has one key present in its left subtree and the other key present in its right subtree is our lca. If nothe keys lie in the left subtree, then the left subtree has an lca also. 
Otherwise, the lcs lies in the right subtree.
The time complexity is O(n)

*/

// solution using path arrays
function findLCA(node1, node2) {
	const path1 = [];
	const path2 = [];
	return findLCAInternal(root, node1, node2, path1, path2);
}

function findLCAInternal(root, node1, node2, path1, path2) {
	if (!findPath(root, node1, path1) || !findPath(root, node2, path2)) {
		console.log(path1.length > 0) ? "node1 is present" : "node1 is missing";
		console.log(path2.length > 0) ? "node2 is present" : "node2 is missing";
	}

	for (let i = 0; i < path1.length && i < path2.length; i++) {
		if (path1[i] !== path[i]) {
			break;
		}
	}
	return path1[i-1];
}

function findPath(root, node, path) {
	if (root === null) {
		return false;
	}
	path.push(root.data);

	if (root.data === node.data) {
		return true;
	}

	if (root.left !== null && findPath(root.left, node, path)) {
		return true;
	}

	if (root.right !== null && findPath(root.right, node, path)) {
		return true;
	}

	path.splice(path.length -1);
	return false;
}


// solution using single traversal
function findLCA2(root, node1, node1) {
	return findLCA2Rec(root, node1, node2);
}

function findLCA2Rec(root, node1, node2) {
	if (root === null) return null;

	if (node.data === node1.data || node.data === node2.data) {
		return node;
	}

	let leftLCA = findLCA2Rec(node.left, node1, node2);
	let rightLCA = findLCA2Rec(node.right, node1, node2);

	if (leftLCA !== null && rightLCA !== null) return node;

	return leftLCA !== null ? leftLCA : rightLCA;
}
