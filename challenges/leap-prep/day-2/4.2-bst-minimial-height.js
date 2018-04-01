/*
Problem Statement: 
Given a sorted (increasing order) array with unique integer elements, 
write an algorithm to create a binary serach tree with minimal height.

My thoughts:
This problem has two subproblems - how to add elements from an array into
a BST and how to ensure a BST is of minimal height.

Notes from book solution:
To create a tree of minimal height, we need to match
the number of nodes in the left subtree to the number
of nodes in the right subtree as much as possible.
This means that we want the root to be the middle of
the array.
Therefore, the middle of each subsection of the array 
becomes the root node for that subtree.
Starting with the fact that our left half of the array
will become our left subtree and our right half of the
array will become our right subtree.

To do this, we can recursively call a method that is passed
just a subset of the array and returns just the root of 
a minimal tree for that array.

Steps for the createMinimalBST method - insert into the tree
the middle element of the array, insert (into the left subtree)
the left subarray elements, insert (into the right subtree) the
right subarray elements, and recurse.

Gotchas - it is easy to make off-by-obe error with this problem.
Be sure to test each part of your code very thoroughly.
*/

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {
    constructor: BinarySearchTree,

    add: function (value){
        //create a new node
        var node = { 
                value: value, 
                left: null,
                right: null 
            },
            current;
    
        //edge case: no items in the tree yet
        if (this._root === null){
            this._root = node;
        } else {
            current = this._root;
            
            while(true){
                //if the new value is less than this node's value, go left
                if (value < current.value){               
                    //if there's no left, then the new node belongs there
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {                    
                        current = current.left;
                    }
                    
                //if the new value is greater than this node's value, go right
                } else if (value > current.value){ 
                    //if there's no right, then the new node belongs there
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {                    
                        current = current.right;
                    }       
 
                //if the new value is equal to the current one, just ignore
                } else {
                    break;
                }
            }        
        }
    },

    createMinHeightBST: function(arr) {
        let mid;
        if(arr.length === 0) {
            return 0;
        } else if (sortedArr.length === 1) {
            mid = 0;
        } else {
            mid = Math.floor(arr.length/2);
        }

        this.add(arr[mid]);

        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid + 1, arr.length);

        this.createMinHeightBST(leftArr);
        this.createMinHeightBST(rightArr);
    },

    size: function(){
        var length = 0;
        
        this.traverse(function(node){
            length++;
        });
        
        return length;
    },
    
    toArray: function(){
        var result = [];
        this.traverse(function(node){
            result.push(node.value);
        });
     
        return result;
    },

    toString: function(){
        return this.toArray().toString();
    },

    traverse: function(process){
        function inOrder(node){
            if (node){
                
                //traverse the left subtree
                if (node.left !== null){
                    inOrder(node.left);
                }            
                
                //call the process method on this node
                process.call(this, node);
            
                //traverse the right subtree
                if (node.right !== null){
                    inOrder(node.right);
                }
            }        
        } 
        inOrder(this._root);    
    }
};

/* test */

let sortedArr = [1,2,3,4,5,6,7,8,9,10];
let tree = new BinarySearchTree();
tree.createMinHeightBST(sortedArr);
console.log(tree);