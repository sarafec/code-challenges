// adapted from http://rosettacode.org/wiki/Tree_traversal#JavaScript

function BinaryTree(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};

BinaryTree.prototype  = {
    walk: function(func, order) {
        for (var i in order) 
            switch (order[i]) {
                case "this": func(this.value); break;
                case "left": if (this.left) this.left.walk(func, order); break;
                case "right": if (this.right) this.right.walk(func, order); break;
            }
    },

    levelorder: function(func) {
        var queue = [this];
        while (queue.length != 0) {
            var node = queue.shift();
            func(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    },

    preorder: function(f) {
        this.walk(f,['this','left','right'])
    },

    inorder: function(f) {
        this.walk(f,['left','this','right'])
    },

    postorder:  function(f) {
        this.walk(f,['left','right','this'])
    }
};

// convenience function for creating a binary tree
function createBinaryTreeFromArray(ary) {
    var left = null, right = null;
    if (ary[1]) left = createBinaryTreeFromArray(ary[1]);
    if (ary[2]) right = createBinaryTreeFromArray(ary[2]);
    return new BinaryTree(ary[0], left, right);
};
 