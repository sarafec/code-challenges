/*

Problem Statement: 
Given a sorted arr, create a binary search tree with minimal height.

My thoughts:
I have 70+ questions and I somehow picked the one I spent the most time 
on prepping for today. It's either a great way to start or it'll all go 
downhill from here.

Process:
Assuming we have BST object with an add/insert method on its prototype,
we are just going to traverse the array as we would for a binary search 
problem. Calling the function recursively if the midpoint does not cause the 
arr to be empty.
The reason we are traversing the array in this way is to set up our binary
search tree to be as equal as possible on both sides, and thus have the 
smallest possible height.
We could add the items to the bst and it will still sort them, but not in a
way that ensure the shortest possible height.

*/

// note - I am not including the rest of the BST methods
// I'll reference an add fn that is available in other files

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {
    createMinHeightBST: function(arr) {
        // define midpoint
        let mid;
        if(arr.length === 0) {
            return -1;
        } else if (arr.length === 1) {
            mid = 0;
        } else {
            mid = Math.floor(arr.length/2);
        }
        
        // add node to BST
        this.add(arr[mid]);

        // define subarrays
        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid + 1, arr.length);
        this.createMinHeightBST(leftArr);
        this.createMinHeightBST(rightArr);  
    }
}