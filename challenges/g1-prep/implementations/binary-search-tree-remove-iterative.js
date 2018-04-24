function BinarySearchTree() {
	this.root = null;
}

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prorotype = {
	remove: function(value) {
		let found = false,
		     parent = null,
		     current = this.root,
		     childCount,
		     replacement,
		     replacementParent;

		while(!found && current) {
			if (value < current.value) {
				parent = current;
				current = current.left;
			} else if (value > current.value) {
				parent = current;
				current = current.right;
			} else {
				found = true;
			}
		}
		
		if (found) {
			childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);
			
			// remove the root
			if (current === this.root) {
				case 0:
					this.root = null;
					break;
				case 1:
					this.root = (current.right === null ? current.left : current.right);
					break;

				case 2:
					replacement = this.root.left;
					while (replacement.right !== null) {
						replacementParent = replacement;
						replacement = replacement.right;
					}

					if (replacementParent !== null) {
						replacementParent.right = replacement.left;
						replacement.right = this.root.right;
						replacement.left = this.root.left;

						replacement.right = this.root.right;
					}
					
					this.root = replacement;
			
// remove non-root values
			} else {
				switch(childCount) {
						case 0:
							if (current.value < parent.value) {
								parent.left = null;
							} else {
								parent.right = null;
							} 
								break;

						case 1:
							if (current.value < parent.value) {
								parent.left = (current.left === null ? current.right : current.left);
							} else {
								parent.right = (current.left === null ? current.right : current.left);
							}
							break;

						case 2: 
							replacement = current.left;
							replacementParent = current;
							while (replacement.right !== null) {
								replacementParent = replacement;
								replacement = replacement.right;
							}
							replacementParent.right = replacement.left;
							
							replacement.right = current.right;
							replacement.left = current.left;
							
							if (current.value < parent.value) {
								parent.left = replacement;
							} else {
								parent.right = replacement;
							}
				}
			}
		}
	}
}
