function BinarySearchTree() {
	this.root = null;
}

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype = {
	add: function(value) {
		const node = new Node(value);
		let current;

		if (this.root === null) {
			this.root = node;
		} else {
			current = this.root;
			
			while(true) {
				if (value < current.value) {
					// move right
					if(current.left === null) {
						current.left = node;
						break;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if(current.right === null) {
						current.right = node;
						break;
					} else {
						current = current.right;
					}
				} else {
					break;
				}
			}
		}
	}
};
