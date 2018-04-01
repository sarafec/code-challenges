// adapted from - https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/

/*

Explaination:
We will traverse through the tree, moving to the left and right.
Because a BST is sorted by nature, you can leverage this to know the 
node's placement.

If the current node's value is greater than both nodes, we'll move left
If the current' node's value is less than both nodes, we'll move to the right

*/

function lca(node, n1, n2)  {
    if (node == null)
        return null;

    // If both n1 and n2 are smaller than root, then LCA lies in left
    if (node.value > n1 && node.data > n2)
        return lca(node.left, n1, n2);

    // If both n1 and n2 are greater than root, then LCA lies in right
    if (node.value < n1 && node.data < n2) 
        return lca(node.right, n1, n2);

    return node;
}