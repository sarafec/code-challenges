### Miscellaneous Notes from Online Videos 

#### Notes on Trees
* Balanced trees have an insert and find time of O(log n).
* Unbalanced trees have an insert and find time of O(n).
* Preorder traversal - visit root, visit left, visit right.
* Inorder traversal - visit left, visit root, visit right.
* Postorder traversal - visit left, visit right, visit root.
* In BST's, you'll probably want to do inorder traversals to allow them to be printed in order.

BST Insert Method (recursive)
`function insert(value, current) {
    if (value <= current.data) {
        if(current.left === null) {
            current.left = new Node(value);
        } else {
            this.insert(value, current.left);
        }
    } else {
        if (current.right === null) {
            current.right = new Node(value)
        } else {
            this.insert(value, current.right);
        }
    }
};`

BST Contains Method (recursive)
`function contains(value, current) {
    if(value === current.data) {
        return true;
    } else if (value < current.data) {
        if(current.left === null) {
            return false;
        } else {
            return this.contains(value, current.left);
        }
    } else {
        if(current.right === null) {
            return false;
        } else {
            return this.contains(value, current.right);
        }
    }
};`

BST In-order Traversal Method (recursive)
`function printInOrder(current) {
    if (current.left !== null) {
        this.printInOrder(current.left);
    }
    
    console.log(current.data);

    if (current.right !== null) {
        this.printInOrder(current.right);
    }
};`

BST Preorder Traversal Method (recursive)
`function printPreOrder(current) {
    console.log(current.data);
    
    if (current.left !== null) {
        this.printPreOrder(current.left);
    }

    if (current.right !== null) {
        this.printPreOrder(current.right);
    }
};`

BST Postorder Traversal Method (recursive)
`function printPostOrder(current) {
    
    if (current.left !== null) {
        this.printPostOrder(current.left);
    }

    if (current.right !== null) {
        this.printPostOrder(current.right);
    }

    console.log(current.data);
};`

#### Notes on Tries
* Each node stores a character.
* We'll need a Node object with properties such as a HashTable/Object and a boolean isComplete flag.
* Problems that use tries will be ones that use word validation.
* In order to avoid starting over from the root on each look up, you can keep track of state.
* One way to keep track of state is to return a pointer when we do our look ups.
* To insert an element into a trie, we simply build on the current path from the root to the leaf.
* Tries contain an array of pointers.
* You will maintain a root node and traversal pointer (trav).
* To search for an element in a trie, use a key to search for, if you don't hit null, you've found it.
* The beauty of tries is as it gets bigger and bigger, you'll have less to add to it.

#### Notes on Heaps
* Heaps are a data structure where the root is always the largest or smalelst number.
* In a min heap, the numbers get bigger top to bottom, left to right.
* A number is inserted into the next open spot in a heap and the it'll bubble up to its correct place based on value.
* When removing the root, we replace it with the last element added and bubble that element back down to its correct place.
* We can implement a heap using an array. We use some simple rules about indexes to traverse the heap.
* The parent node is ((index - 2)/2)
* The left child node is (index * 2 + 1)
* The right child node is (index * 2 + 2)

#### Notes on Mergesort
* The idea is to sort down to arrays of one and then combine them all together in a sorted array.
* You'll sort the left half, sort the right, half and merge the sorted halves.

#### Notes on Quicksort
* You'll pick a pivot, compare each item to the pivot. You'll put the items less then the pivot on the left and greater than the pivot on the right. Repeat this using a new pivot from the new group. When there are no items left to pivot, gather the pivots and pivoted groups into a sorted list.
* You can choose any point as your pivot.
* The runtime of quicksort is O(n log n), but O(n^2) in the worst case (if you pick a bad pivot).
