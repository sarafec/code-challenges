/*

We can do this either recursively or iteratively.

Our recursive implementation will call the left subtree and right subtree of the root and then swap the left and right subtrees.
Running time for this traversal will be O(n).
Space complexity will be O(n).

Our iterative solution will use bfs (using a queue). While doing the traversal we'll swap the left and right child of every node.
Running time for this traversal is O(n)
Space complexity is O(n), in the worst case


*/

// recursive 
function mirror(node) {
	if (node === null) {
		return;
	} else {
		let temp;
		mirror(node.left);
		mirror(node.right);

		// swap
		temp = node.left;
		node.left = node.right;
		node.right = temp;
	}
}

// iterative
function mirrorIter(node) {
	if (root === null) return;
	
	const queue = new Queue();
	queue.enqueue(root);
	
	while(!queue.isEmpty()) {
		let curr = queue.dequeue();
		swap(curr.left, curr.right);
		if (curr.left) {
			queue.enqueue(curr.left);
		}
		if (curr.right) {
			queue.enqueue(curr.right);
		}
	}
}
