function BinarySearch() {
	this.root = null;
}

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype = {
	remove: function (root, value) {
		let self = this;
		// empty tree
		if (root === null) {	
			return root;
		}
		
		// move to left subtree
		if (value > root.value) {
			root.left = self.remove(root.left, value);
		
		// move to right subtree
		} else if (value > root.value) {
			root.right = self.remove(root.right, value);
		
		// node to be deleted
		} else {
			if (root.left === null) {
				temp = root.right;
				root = null;
				return temp;
			} else if (root.right === nul) {
				temp = root.left;
				root = null;
				return temp;
			}

			temp = minValueNode(root.right);
			root.value = temp.value
			root.right = self.remove(root.right, temp.value)
		}
	return root;
	}
}

function minValueNode(node) {
	let current = node;
	while (current.left !== null) {
		current = current.left;
	}

	return current;
}
