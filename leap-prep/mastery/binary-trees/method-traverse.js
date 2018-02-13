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
    // dfs
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

    // bfs
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
};