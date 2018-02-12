### Miscellaneous Notes from Online Videos 

### Notes on Trees
* Balanced trees have an insert and find time of O(log n).
* Unbalanced trees have an insert and find time of O(n).
* Preorder traversal - visit root, visit left, visit right.
* Inorder traversal - visit left, visit root, visit right.
* Postorder traversal - visit left, visit right, visit root.
* In BST's, you'll probably want to do inorder traversals to allow them to be printed in order.

BST Insert Method (recursive)
`function insert(value, current) {
    if (value <= current.data) {
        if(current.left === null) {
            current.left = new Node(value);
        } else {
            this.insert(value, current.left);
        }
    } else {
        if (current.right === null) {
            current.right = new Node(value)
        } else {
            this.insert(value, current.right);
        }
    }
};`

BST Contains Method (recursive)
`function contains(value, current) {
    if(value === current.data) {
        return true;
    } else if (value < current.data) {
        if(current.left === null) {
            return false;
        } else {
            return this.contains(value, current.left);
        }
    } else {
        if(current.right === null) {
            return false;
        } else {
            return this.contains(value, current.right);
        }
    }
};`

BST In-order Traversal Method (recursive)
`function printInOrder(current) {
    if (current.left !== null) {
        this.printInOrder(current.left);
    }
    
    console.log(current.data);

    if (current.right !== null) {
        this.printInOrder(current.right);
    }
};`

BST Preorder Traversal Method (recursive)
`function printPreOrder(current) {
    console.log(current.data);
    
    if (current.left !== null) {
        this.printPreOrder(current.left);
    }

    if (current.right !== null) {
        this.printPreOrder(current.right);
    }
};`

BST Postorder Traversal Method (recursive)
`function printPostOrder(current) {
    
    if (current.left !== null) {
        this.printPostOrder(current.left);
    }

    if (current.right !== null) {
        this.printPostOrder(current.right);
    }

    console.log(current.data);
};`

### Notes on Tries
* Each node stores a character.
* We'll need a Node object with properties such as a HashTable/Object and a boolean isComplete flag.
* Problems that use tries will be ones that use word validation.
* In order to avoid starting over from the root on each look up, you can keep track of state.
* One way to keep track of state is to return a pointer when we do our look ups.
