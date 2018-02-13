
// Recursive function to check if two Nodes are siblings
function isSibling(node, a, b) {
    // Base case
    if (node == null) {
        return false;
    }

    return ((node.left == a && node.right == b) ||
            (node.left == b && node.right == a) ||
            isSibling(node.left, a, b) ||
            isSibling(node.right, a, b));
}

// Recursive function to find level of Node 'ptr' in a binary tree
function level(node, ptr, lev) {
    // base cases
    if (node == null)
        return 0;

    if (node == ptr)
        return lev;

    // Return level if Node is present in left subtree
    let l = level(node.left, ptr, lev + 1);
    if (l != 0)
        return l;

    // Else search in right subtree
    return level(node.right, ptr, lev + 1);
}

// Returns 1 if a and b are cousins, otherwise 0
function isCousin(node, a, b) {
    // 1. The two Nodes should be on the same level
    //       in the binary tree.
    // 2. The two Nodes should not be siblings (means
    //    that they should not have the same parent
    //    Node).
    return ((level(node, a, 1) == level(node, b, 1)) &&
            (!isSibling(node, a, b)));
}