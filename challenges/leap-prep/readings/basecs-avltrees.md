### BaseCS: The Little AVL Tree That Could

* Binary search trees, in the best case scenario run in O(log n) running time.  However, the logarithmic nature of BST's only applies and can only be maintained if they are balanced.
* If a BST is unbalanced, we would need to look in every node. Which is a linear search or O(n).
* The AVL tree is a self-balanacing binary search tree. This means that it rearranges itself to be height-balanced whenever the structure is augmented.
* A tree is balaanced if any two sibling structures/subtrees do not differ in height by more than one level. In other words, any two leaves should not have a difference in depth that is more than 1.
* A tree that is height balanced is one whose leaves are balanced relative to the other subtrees in the tree. The height of a tree is the number of nodes on the longest path from the root to the leaf. In a height-balanced tree, no leaf should have a significantly longer path from the root than any other leaf.
* A rule for height balanced trees - in a height balanced tree, no single leaf should have a significantly longer path from the root node than any other leaf on the tree.
* To convert a BST into an AVL tree you'll rearrange the nodes.
* The logic for how to rearrange those nodes goes something like this - if the subtree of a node has height sh1 and h2, then the absolute value of the difference of those two height must never be less than or equal to more than 1.
* The difference between the heights of two subtrees in an an AVL tree should never exceed 1 level.
* The balance factor of a binary tree is the difference in heights between the two subtrees.
* The restructuring in height-balancing tree is called "rotations. And there are single rotations and double rotations.
* Single rotations have a left rotaion and a right roataion. A left rotation is used if a node is inserted into the right subtree of another, hiegher up node's right tree structure, and that insertion or deletion cuases a tree to become unbalanced.
* A right rotation is used if a node is inserted into the left subtree of a left subtree, and causes the tree to become unbalanced.
* Double rotations can be left-right rotations or right-left rotations.
* A left-right rotaion is a combination of a left rotation followed by a right rotation.
* A right-left rotation is a combination of a right rotation followed by a left rotation.

Further Research
* [How to determine if a binary search tree is balanced](https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/)