/*

TODOS: 
- Add explaination
- Whiteboard (high priority)

*/

function BinaryTree() {
    this.root = null;
}

function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BinaryTree.prototype = {
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
    }
};