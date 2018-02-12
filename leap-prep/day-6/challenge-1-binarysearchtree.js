/*
Problem Statement:
Write an implementation of a binary search tree

My thoughts:
I spent four hours learning walking through the remove implementation.

Here is the summary:
There are four main tasks in removal - 
    1) finding if there is a node to remove and where it is located.
    2) count the children of the node we will remove
    3a) remove node from the root if current = this.root
    3b) remove from the "body" of the tree (non-root values)

To remove when there is are no children remove all pointers to it.
To remove when there is one child, replace pointer from parent to node 
to be remove with a pointer to that node's child.
To remove when there is two children, move one step to the left and then
as right as you can go. Keep a pointer to the replacement (rightmost point
on the current.left)and its parent.
Replace replacementParent.right with replacement.left. Which will replace 
the replacement pointer and move its left pointer to its former parent.
Then replace the target node's pointer with the replacement's pointers.

To find out where the replacement belongs within the tree - if it is the 
this.root we're replacing, just make replacement = this.root. Otherwise, 
check against the parent's value to figure out it should be attached to the right or
left side of the parent.

*/

function BinarySearchTree() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype = {
    add: function(data) {
        const node = new Node(data);
        let current;
        if (this.root == null) {
            this.root = node;
        } else {
            current = this.root;
            while (true) {
                // move left
                if(current.data > data) {
                    if(current.left === null) {
                        current.left = node;
                        break;
                    } else {
                        current = current.right;
                    } 
                // move right
                } else if (current.data < data) {
                    if(current.right === null) {
                        current.right = node;
                        break;
                    } else {
                        current = current.left;
                    }
                    // node value already exists, disallow
                } else {
                    break;
                }
            }
        }
    },

    remove: function(value) {
        let found = false,
            parent = null,
            current = this.root,
            childCount,
            replacement,
            replacementParent;
        
            while (!found && current) {
                if (value < current.value) {
                    parent = current;
                    current = current.left;
                } else if (value > current.value) {
                    parent = current;
                    current = current.right;
                } else {
                    found = true;
                }
            }

            if (found) {
                childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

                // if value is at the root
                if (current === this.root) {
                    switch (childCount) {
                        case 0:
                            this.root = null;
                            break;
                        
                        case 1:
                            this.root = (current.right === null ? current.left : current.right);
                            break;
                        
                        case 2:
                            replacement = this.root.left;

                            while (replacement.right !== null) {
                                replacementParent = replacement;
                                replacement = replacement.right;
                            }

                            if (replacementParent !== null) {
                                replacementParent.right = replacement.left;
                                replacement.right = this.root.right;
                                replacement.left = this.root.left;
                            } else {
                                replacement.right = this.root.right;
                            }
                            this.root = replacement;
                    }
                // value is not the root
                } else {
                    switch (childCount) {
                        case 0:
                            if (current.value < parent.value) {
                                parent.left = null;
                            } else {
                                parent.right = null;
                            }
                            break;
                        
                        case 1:
                            if (current.value < parent.value) {
                                parent.left = (current.left === null ? curernt.right : current.left);
                            }  else {
                                parent.right = (current.left === null ? current.right : current.left);
                            }
                            break;
                        
                        case 2:
                            replacement = current.left;
                            replacementParent = current;

                            while (replacement.right !== null) {
                                replacementParent = replacement;
                                replacement = replacement.right;
                            }
                            replacementParent.right = replacement.left;
                            replacement.right = current.right;
                            replacement.left = current.left;

                            if (current.value < parent.value) {
                                parent.left = replacement;
                            } else {
                                parent.right = replacement;
                            }
                    }
                }
            }
    }
}