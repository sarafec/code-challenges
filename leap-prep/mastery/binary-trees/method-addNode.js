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
    }
};