// adapted from nicholas zakas

//work left to do
// 2 - add comments
// 3 - write explainer

function BinarySearchTree() {
	// pointer to root node in tree
	this.root = null;
}

BinarySearchTree.prototype = {
	constructor: BinarySearchTree,
	// private methods
	// appends data to the appropriate point in a tree
	add: function(value) {
		let node = {
			value: value,
			left: null,
			right: null
		},
			current;

		if(this.root === null) {
			this.root = node;
		} else {
			current = this.root;

			while(true) {
				if(value < current.value) {
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
	},

	// determines if the value is present in the tree
	contains: function(value) {
		let found = false,
			current = this.root;

		while(!found && current) {
			if(value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		return found;
	},

	// removes a node with the given value from the tree
	// ensure the binary tree is balanced
	remove: function(value) {
		let found = false,
			parent = null,
			current = this.root,
			childCount,
			replacement,
			replacementParent;

		while(!found && current) {
			if(value < current.value) {
				parent = current;
				current = current.left;
			} else if (value > current.value) {
				parent = current;
				current = current.right;
			} else {
				found = true;
			}
		}

		if(found) {
			childCount = (current.left !== null ? 1 : 0) + (current.right !== null? 1: 0);

			// edge case - the value is the root
			if(current === this.root) {
				switch(childCount) {
					case 0:
						this.root = null;
						break;

					case 1:
						this.root = (current.right === null ? current.left : current.right);
						break;

					case 2:
						replacement = this.root.left;
						while(replacement.right !== null) {
							replacementParent = replacement;
							replacement = replacement.right;
						}

						if(replacementParent !== null) {
							replacementParent.right = replacement.left;

							replacement.right = this.root.right;
							replacement.left = this.root.left;
						} else {
							replacement.right = this.root.right;
						}
						this.root = replacement;
				}
			} else {
				switch(childCount) {
					case 0:
						if(current.value < parent.value) {
							parent.left = null;
						} else {
							parent.right = null;
						}
						break;

					case 1:
						if(current.value < parent.value) {
							parent.left = (current.left === null ? current.right : current.left);
						} else {
							parent.right = (current.left === null ? current.right : current.left);
						}
						break;

					case 2:
						replacement = current.left;
						replacementParent = current;

						while(replacement.right !== null) {
							replacementParent = replacement;
							replacement = replacement.right;
						}

						replacementParent.right = replacement.left;

						replacement.right = current.right;
						replacement.left = current.left;

						if(current.value < parent.value) {
							parent.left = replacement;
						} else {
							parent.right = replacement;
						}
				}
			}
		}
	}, 

	size: function() {
		let length = 0;
		this.traverse(function(node) {
			length++;
		});

		return length;
	},

	toArray: function() {
		let result = [];
		this.traverse(function(node) {
			result.push(node.value);
		});

		return result;
	},

	toString: function() {
		return this.toArray().toString();
	},

	traverse: function(process) {
		function inOrder(node) {
			if(node) {
				if(node.left !== null) {
					inOrder(node.left);
				}

				process.call(this, node);

				if(node.right !== null) {
					inOrder(node.right);
				}
			}
		}
		inOrder(this.root);
	}
}