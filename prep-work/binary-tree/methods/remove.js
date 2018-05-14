/*

We'll want to make sure that the tree shrinks from the bottom. The deleted node is replaced by the bottom-most and rightmost node.

We'll start with the root, find the deepest and rightmost node in the binary tree and the node which we want to delete. We will replace the deepest rightmost node's data with the node to be deleted. Then, delete the deepest rightmost node.

Note that we can also replace the node's data that is to be deleted with any node whose left and right child pointers are null, but we only use the deepest node in order to maintain the balance of the binary tree.

*/

function remove(root, key) {
	const queue = new Queue();
	queue.enqueue(root);

	let	temp,
		keyNode = null;

	while(!queue.isEmpty()) {
		temp = queue.dequeue();

		if (temp.key === key) {
			keyNode = temp;
		}
		
		if (temp.left) {
			queue.enqueue(temp.left);
		}

		if (temp.right) {
			queue.enqueue(temp.right);
		}

		let x = temp.key;
		deleteDeepest(root, temp);
		keyNode.key = x;
	}
}

function deleteDeepest(root, dNode) {
	const queue = new Queue;
	queue.enqueue(root);

	// level order traversal
	let temp;
	while (!queue.isEmpty()) {
		temp = queue.dequeue();
		if (temp.right) {
			if (temp.right === dNode) {
				temp.right = null;
				return;
			} else {
				queue.enqueue(temp.right);
			}
		}
		
		if (temp.left) {
			if (temp.left === dNode) {
				temp.left = null;
				return;
			} else {
				queue.enqueue(temp.left;
			}
		}
	}
}


