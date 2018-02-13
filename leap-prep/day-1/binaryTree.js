function BinaryTree() {
    this.root = null;
}

function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BinaryTree.prototype = {
    add: function (current, value) {
        if(!current) {
            current = this.root;
        }

        if (current == null) {
            return new Node(value);
        }
     
        if (value < current.value) {
            current.left = add(current.left, value);
        } else if (value > current.value) {
            current.right = add(current.right, value);
        } else {
            // value already exists
            return current;
        }
     
        return current;
    },

    contains: function(current, value) {
        if(!current) {
            current = this.root;
        }
        
        if (current === null) {
            return false;
        } 
        if (value === current.value) {
            return true;
        } 
        return value < current.value
          ? contains(current.left, value)
          : contains(current.right, value);
    },

    remove: function(current,  value) {
        if(!current) {
            current = this.root;
        }

        if (current == null) {
            return null;
        }
     
        if (value == current.value) {
            // Node to delete found
            // ... code to delete the node will go here
        } 
        if (value < current.value) {
            current.left = remove(current.left, value);
            return current;
        }
        current.right = remove(current.right, value);
        return current;
    },

    traverseInOrder: function(node) {
        if (node != null) {
            traverseInOrder(node.left);
            console.log(" " + node.value);
            traverseInOrder(node.right);
        }
    }, 

    traversePreOrder: function(node) {
        if (node != null) {
            console.log(" " + node.value);
            traversePreOrder(node.left);
            traversePreOrder(node.right);
        }
    },

    traversePostOrder: function(node) {
        if (node != null) {
            traversePostOrder(node.left);
            traversePostOrder(node.right);
            System.out.print(" " + node.value);
        }
    }, 

    traverseLevelOrder: function() {
        if (root == null) {
            return;
        }
     
        let nodes = new LinkedList();
        nodes.add(root);
     
        while (!nodes.isEmpty()) {
     
            let node = nodes.remove();
     
            console.log(" " + node.value);
     
            if (node.left != null) {
                nodes.add(node.left);
            }
     
            if (node.right!= null) {
                nodes.add(node.right);
            }
        }
    }

}