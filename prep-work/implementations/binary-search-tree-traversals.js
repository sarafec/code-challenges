function BinarySearchTree() {
	this.root = null;
}

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype = {
	inOrderTraverse: function(node) {
		if (node) {
			if (node.left !== null) {
				this.inOrderTraverse(node.left);
			}

			console.log(node);

			if (node.right !== null) {
				this.inOrderTraverse(node.right);
			}
		}
		this.inOrderTraverse(this.root);
	},

	preOrderTraverse: function(node) {
		if (node) {
			console.log(node);

			if (node.left !== null) {
				this.preOrderTraverse(node.left);
			}

			if (node.right !== null) {
				this.preOrderTraverse(node.right);
			}
		}
		this.preOrderTraverse(this.root);
	},

	postOrderTraverse: function(node) {
			if (node.left !== null) {
				this.preOrderTraverse(node.left);
			}

			if (node.right !== null) {
				this.preOrderTraverse(node.right);
			}

			console.log(node);

		}
		this.preOrderTraverse(this.root);
	},
	printLevelOrder: function() {
		const h = getHeight(this.root);
		for (let i = 1 i <= h; i++) {
			printGivenLevel(root, i);
		}
	},
	getHeight: function(root) {
		if (root === null) return 0;

		let lHeight = getheight(root.left);
		let rHeight = getHeight(root.right);
		if (lHeight > rHeight) {
			return (lHeight + 1);
		} else {
			return (rHeight + 1);
		}
	},
	printGivenLevel: function(root, level) {
		if (root == null) return;
		if (level == 1) { 
			console.log (root.data + " ");
		} else if (level > 1) {
			printGivenLevel(root.left, level - 1);
			printGivenLevel(root.right, level - 1);
		}
	
	}
};
