/*

There are a couple ways we can find the max width of our tree.

One way we can do this is by doing level order traversal (bfs) with a queue. 
Using this method, we'll store all the child nodes at the current level in the queue and then count the total number of nodes after the level order traversal for a particular level is complete. 
The queue will then contain all the nodes of the next level - so we can easily find out the total number of nodes in the next level by finding the size of the queue. 
We continue this for the rest of the levels. We store and update the max number of nodes found at each level.
The time complexity is O(n)

Alternatively, we can use preorder traversal. To do this, we'll create a temporary array the size of the height of the tree. We'll initialize all values as 0. Then, we'll traverse the tree using preorder traversal and fill the entries in the count so that the count array contains the count of nodes at each level of the binary tree.
The time complexity is O(n)
The space complexity is O(h)

*/

// solution using bfs
function maxWidth(root) {
	if (root === null) return 0;

	let maxWidth = 0;
	const queue = new Queue();
	queue.enqueue(root);
	
	while (!queue.isEmpty()) {
		let count = queue.size();
		maxWidth = Math.max(maxWidth, count);

		while (count-- > 0) {
			let temp = queue.dequeue();
			if (temp.left !== null) {
				queue.enqueue(temp.left);
			}

			if (temp.right !== null) {
				queue.enqueue(temp.right);
			}
		}
	}
	return maxWidth;
}


// solution using preorder traversal
function getMaxWidthAlt(node) {
	let	width,
		level, 
		h = height(node);
	const count = [];

	getMaxWidthAltRec(node, count, level);
	return Math.max(...count);
	
}

function getMaxWidthAltRec(node, count, level) {
	if (node !== null) {
		count[level]++;
		getMaxWidthAltRec(node.left, count, level + 1);
		getMaxWidthAltRec(node.right, count, level + 1);
	}
}

function height(node) {
	if (node === null) {
		return 0;
	} else {
		let leftHeight = height(node.left);
		let rightHeight = height(node.right);
		return (leftHeight > rightHeight) ? (leftHeight + !) : (rightHeight + 1);
	}
}
