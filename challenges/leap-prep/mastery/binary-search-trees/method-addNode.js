/*

Explaination:


*/

function BinarySearchTree() {
    this._root = null;
}

function Node(value) {
    this.data = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype = {
    add: function (value){
        //create a new node
        const node = new Node(value);
        let current;
    
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
    }
};