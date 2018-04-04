function BinarySearchTree() {
	this.root = null;
}

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype = {
	add: function(root, node) {
		if (root === null) {
			root = node;
		} else if (root.value < node.value) {
			if (root.right === null) {
				root.right = node;
			} else {
				this.add(root.right, node);
			}
		} else {
			if (root.left === null) {
				root.left = node;
			} else {
				this.add(root.left, node);
			}
		}
	}
};
