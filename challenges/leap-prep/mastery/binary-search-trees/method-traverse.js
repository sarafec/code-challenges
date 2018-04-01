/*

TODOS: 
- Add explaination
- Whiteboard (high priority)

*/

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {
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