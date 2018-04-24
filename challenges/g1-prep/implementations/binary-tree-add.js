function BinaryTree() {
	this.root = null;
}

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinaryTree.prototype = {
	add: function (value) {
		const queue = [];
		queue.unshift(this.root);

		while(queue.length > 0) {
			temp = queue[0];
			queue.pop();
			
			if (temp.left === null) {
				temp.left = new Node(value);
				break;
			} else {
				queue.unshift(temp.left);
			}

			if (temp.right === null) {
				temp.right = new Node(value);
				break;
			} else {
				queue.unshift(temp.right);
			}
		}

	}
}
