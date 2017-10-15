/*

In-order Traversal
recursive solution

explaination:
in-order traversal means that you visit the left branch, 
the current node and then the right branch.

for this example, we will use a binary search tree.

*/

/** Binary Search Tree Methods **/
function BinarySearchTree() {
	// pointer to root node in tree
	this.root = null;
}

BinarySearchTree.prototype.add = function(value) {
	let node = {=
		value: value,
		left: null,
		right: null
	},
		current,
		parent;

	//if there is no root node, make it your node
	if(this.root === null) {
		this.root = node;
	} else {
		current = this.root;

		while(true) {
			parent = current;
			if(value < current.value) {
				current = current.left;
				if(current === null){
					parent.left = node;
					break;
				}
			} else {
				current = current.right;
				if(current === null) {
					parent.right = node;
					break;
				}
			}

		}
	}
};

BinarySearchTree.prototype.toArray = function() {
	let result = [];
	this.traverse(function(node) {
		result.push(node.value);
	});

	return result;
};

BinarySearchTree.prototype.toString = function() {
	return this.toArray().toString();
}


/** In-Order Traversal Implementation **/
BinarySearchTree.prototype.traverse = function(process) {
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


/** Test Function **/
function testTree() {
	let tree = new BinarySearchTree;

	tree.add(5);
	tree.add(10);
	tree.add(1);
	tree.add(3);
	tree.add(66);
	tree.add(14);
	console.log(tree.toString());
}

console.log(testTree());