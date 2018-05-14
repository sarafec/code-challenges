/*

We'll do iterative level order traversal of the given tree using a queue. We find a node whose left child is empty ,we make a new key as the left child of the node. Otherwise, if we find a node whose right child is empty, we make the new key as right child. We keep traversing the tree until we find a node whose either left or right is empty.

*/

class Node {
	constructor (key) {
		this.left = null;
		this.right = null;
		this.key = key;
	}
}

function insert(temp, key) {
	const queue = new Queue();
	queue.enqueue(temp);

	while (!queue.isEmpty()) {
		temp = queue.dequeue();

		if (temp.left === null) {
			temp.left = new Node(key);
			break;
		} else {
			queue.enqueue(temp.left);
			
			if (temp.right == null) {
				temp.right = new Node(key);
				break;
			} else {
				queue.enqueue(temp.right);
			}
		}	
	}
}
