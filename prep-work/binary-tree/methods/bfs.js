/*

Using a queue, we can visit a node and put its children in the queue.
The running time is O(n), where n is the number of nodes in the binary tree.

*/

function bfs(root) {
	const queue = new Queue();
	queue.enqueue(root);
	
	while (!queue.isEmpty()) {
		let temp = queue.dequeue();
		console.log(temp.data);
		
		// enqueue left child
		if (temp.left !== null) {
			queue.enqueue(temp.left);
		}

		// enqueue right child
		if (temp.right !== null) {
			queue.enqueue(temp.right);
		}
	}
}
