/*

We'll use level order traversal (bfs). We'll start by pushing the root node into the queue. And for each node, while popping it from the queue, we'll add the value of the node to our sum variable. And then we'll push that node's child nodes onto the queue.

The running time is O(n), where n is the number of nodes in the tree.
The running time is O(n)

*/

function sumNodes(root) {
	let sum = 0;
	if (root === null) return 0;
	const queue = new Queue();
	queue.enqueue(root);
	
	while (!queue.isEmpty()) {
		let n = queue.size();
		while (n > 0) {
			let node = queue.dequeue();
			sum += node.key;
			
			// enqueue all children of the dequeued item
			for (let i = 0; i < node.child.length; i++) {
				queue.enqueue(node.child[i]);
			}
			n--;
		}
	}
	return sum;
}
