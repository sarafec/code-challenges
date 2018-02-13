/*

TODOS: 
- Add explaination
- Whiteboard (high priority)

*/

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {
    contains: function(value){
    
        var found = false,
            current = this._root
            
        //make sure there's a node to search
        while(!found && current){
        
            //if the value is less than the current node's, go left
            if (value < current.value){
                current = current.left;
                
            //if the value is greater than the current node's, go right
            } else if (value > current.value){
                current = current.right;
                
            //values are equal, found it!
            } else {
                found = true;
            }
        }
        //only proceed if the node was found
        return found;

    }
};