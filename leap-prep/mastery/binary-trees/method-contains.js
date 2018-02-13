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
    }
};