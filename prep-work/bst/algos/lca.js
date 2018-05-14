/*

The lowest common ancestor between two nodes is defined as the lowest node in the tree that both nodex has as descendants.

Computation of the lowest common ancestors may be useful, for instance, as part of a procedure for determining the distance between pairs of nodes in a tree. 

If we are given a BST where every node has a parent pointer, then the LCA can be easily determined by traversing up using the parent pointer and printing the first intersecting node.

However, without that, we can use the BST properties - we can recursively traverse the bst from the room. While traversing from top to bottom, the first node we encounter with the value between n1 and n2 is the LCA of n1 and n2. 
Just recursively traverse the BST in, if the node's value is greater than both n1 and n2 ,then our LCA lies to the left side of the node. If it is smaller than both n1 and n2, then lca lies on the right side. Otherwise, the root is LCA - but, this assumes that both n1 and n2 are present in the bst. 

The time complexity of the solution is O(h), where h is the height of the tree.
The space complexity is also O(h). We can use a recursive solution to avoid the auxiliary used in the recursive solution.

*/

// recursive
function lca (node, n1, n2) {
	if (node === null) {
		return null;
	}
	
	if (node.data > n1 && node.data > n2) {
		return lca(node.left, n1, n2);
	}

	if (node.data < n1 && node.data < n2) {
		return lca(node.right, n1, n2);
	}

	return node;
}

// iterative
function lcaIt(root, n1, n2) {
	while (root !== null) {
		if (root.data > n1 && root.data > n2) {
			root = root.left;
		} else if (root.data < n1 && root.data < n2) {
			root = root.right;
		} else {
			break;
		}
		return root;
	}
}
