/*

Explaination:
We will traverse through the tree, moving to the left and right.
Because a BST is sorted by nature, you can leverage this to know the 
node's placement.

If the current node's value is greater than both nodes, we'll move left
If the current' node's value is less than both nodes, we'll move to the right

*/

function lca(root, n1,  n2) {
    while (root !== null) {
         // If both n1 and n2 are smaller than root, lca is on the left
        if (root.value > n1 && root.value > n2) {
           root = root.left;
 
        // If both n1 and n2 are greater than root, lca is on the right
        } else if (root.value < n1 && root.value < n2) {
           root = root.right;
 
        } else {
            break;
        }
    }
    return root;
}