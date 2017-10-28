/**
 *  in-order traversal method, iterative
 * 
 *  explaination: 
 * 		in-order traversal -  visits the left node, then the current node,then right node
 * 		we accomplish this traversal iteratively by using a stack to push
 * 	
 * fix it!
 */

// stack definition
function Stack() {
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype.push = function(elem) {
	this.dataStore[this.top++] = elem;
}

Stack.prototype.peek = function() {
	return this.dataStore[this.top - 1];
}

Stack.prototype.pop = function() {
	return this.dataStore[this.top--];
}

Stack.prototype.clear = function() {
	this.top = 0;
	this.dataStore.length = 0;
}

Stack.prototype.length = function() {
	return this.top;
}

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


/* IN-ORDER TRAVERSAL, iterative */
BinarySearchTree.prototype.traverse = function(process) {
	if(this.root === null ) { 
		return null;
	}

	let stack = new Stack();
	let current = this.root;

	while(stack.length() > 0 || current) {
		if(current) {
			stack.push(current);
			current = current.left;
		} else {
			current = stack.pop();
			process.call(this, current);
			current = current.right;				
		}
	}
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