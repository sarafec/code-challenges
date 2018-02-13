function maxDepth(node) {
    if (node == null) {
        return 0;
    } else {
        // compute the depth of each subtree
        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        // use the larger one
        if (lDepth > rDepth) {
            return (lDepth + 1);
        } else {
            return (rDepth + 1);
        }
    }
}