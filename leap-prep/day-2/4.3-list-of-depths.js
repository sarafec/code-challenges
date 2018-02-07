/*
Problem Statement:
Given a binary tree, design an algorithm which creates a linked list 
of all the nodes at each depth. That is to say, if you have a tree with 
depth d, you will have d linked lists. 

My thoughts:
There are a couple sub problems: how to traverse the tree level by level
and how to know to start a new linked list at the end of every level

Solution from the book:
As long as we know which level we're on, we can traverse the graph
any way we'd like. 

We can do a pre-order traversal that changes the level on the next call.
We can pair that with depth-first search.

Alternatively, we can implement a breadth first search. With this,
we'll want to iterate thorugh the root first, then level 2, level 3, and so on.
With each level i, we will have already fully visited all nodes on level i - 1.
This means that to get which nodes are on level i, we can simply look at all children
of the nodes on level i - 1.

Both solutions are equally efficient. They both run in O(n) time.
The dfs solution uses O(log n) recursive calls (in a balanced tree), each of which
adds a new level to the stack. The second solution is iterative and thus does not require
the extra space.

However, because both solutions require returning O(n) data. The extra O(log n) in space usage
is not that tremendous.
*/

// binary tree implementation
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
function createBinaryTreeFromArray(arr) {
    var left = null, right = null;
    if (arr[1]) left = createBinaryTreeFromArray(arr[1]);
    if (arr[2]) right = createBinaryTreeFromArray(arr[2]);
    return new BinaryTree(arr[0], left, right);
};

// linked list implementation
function LinkedList() {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype = {
    add: function(data) {
        var node = {
            data: data,
            next: null
        },
        current;

        if(this._head === null) {
            this._head = node;
        } else {
            current = this._head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this._length++;
    },

    item: function(index) {
        if(index > -1 && index < this._length) {
            var current = this._head,
            i = 0;

            while(i++ < index) {
                current = current.next;
            }
            return current.data;
        } else {
            return null;
        }
    },

    remove: function(index) {
        if(index > -1 && index < this._length) {
            var current = this._head,
            previous,
            i = 0;

            // edge case: you need to remove the first item
            if(index === 0) {
                this._head = current.next;
            } else {
                // find the right location
                while(i++ < index) {
                    previous = current;
                    current = current.next;
                }
                // skip the item to remove
                previous.next = current.next;
            }
            this._length--;

            // return the value
            return current.data;
        } else {
            return null;
        }
    }
}

// -- notes about params
// using dfs approach
// root is root of tree
// list is array of linked lists
// level is the number of levels deep the tree has been traversed

function createLevelLinkedList(root, lists, level) {
    //edge case - if the tree is empty
    if(root === null) {
        return;
    }

    list = null;

    if(lists.length === level) {
        list = new LinkedList();
        lists.push(list);
    } else {
        list = list[level];
    }
    list.add(root);
    createLevelLinkedList(root.left, lists, level + 1);
    createLevelLinkedList(root.right, lists, level + 1);
}
 

/* test */
const testArr = [1,2,3,4,5,6,7,8,9,10];
createBinaryTreeFromArray(testArr);
console.log();

// issues
// I've create a binary tree, how can i get a reference to it
// so that I can call createLevelLinkedList on it?