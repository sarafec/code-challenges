/**
 *  post-order traversal method
 * 
 *  explaination: 
 * 		visits the left node, 
 * 		then the right node, 
 * 		then parent node
 */

function BinarySearchTree() {
	// pointer to root node in tree
	this.root = null;
}

// inserts node into the bst
BinarySearchTree.prototype.add = function(value) {
    
    // values used in insertion method
	let node = {
		value: value,
		left: null,
		right: null
	},
		current,
		parent;

    // edge case - if no items in the tree
	if(this.root === null) {
		this.root = node;
	} else {
		current = this.root;

		while(true) {
            parent = current;
		    // if the new value is less than this node's value, go left
			if(value < current.value) {
                current = current.left;
                // if there is no left, then the new node belongs there
				if(current === null){
					parent.left = node;
					break;
                }
            
            // if the new value is great than this node's value, go right	
			} else {
                current = current.right;
                // if there is no right, then the new node belongs there
				if(current === null) {
					parent.right = node;
					break;
				}
			}

		}
	}
};

// traverses the tree - preorder
// returns the tree as an array
BinarySearchTree.prototype.toArray = function() {
	let result = [];
	this.traverse(function(node) {
		result.push(node.value);
	});

	return result;
};

// traverses the tree - preorder
// returns the tree as a string
BinarySearchTree.prototype.toString = function() {
	return this.toArray().toString();
}


/* POST-ORDER TRAVERSAL, recursive */
BinarySearchTree.prototype.traverse = function(process) {
	function postOrder(node) {
		if(node) {            
			if(node.left !== null) {
				postOrder(node.left);
			}
			            
			if(node.right !== null) {
				postOrder(node.right);
            }
            
            process.call(this, node);			

		}
	}

	postOrder(this.root);
}


// test function
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