### BaseCS: How To Not Be Stumped By Trees
* A tree is a non-linear data structure. In a non-linear data structure, the data doesn't need to necessarily be arranged in a particular order. And it is common (and easy) to traverse a non-linear data structure in a non-sequential manner.
* In tree data structure, you always have a root. A root node can have links to multiple other nodes.
* Parts of a tree - the root is the topmost node of the tree, which never has any links or edges connecting to it. A link/edge is a reference that a parent node contains that tells it what its child node is. A child is any node that has a parent node that links to it. A parent is any node that has a reference or link to another node. A sibling is any groupd of nodes that are the children of the same node. An internal is any node that has a child node (nearly all parent nodes). A leaf are any nodes that do not have a child node in the tree.
* Overall, remember in a tree the data is hierarchical.
* With trees n nodes will always mean n-1 links and edges. A tree can only ever have 1 root node and the root node cannot have any parents, which means nothing can link to it.
* Trees can contain trees. A child node could be the root of a subtree. Therefore, trees are recursive data structures. 
* Two important properties with trees - the depth of the node and the height of the node.
* The depth of the node is the number of links/edges it takes to reach that node from the root of the tree.
* The height of a node is the maximum number of links or edges (or the longest path) from that node to its furthest leaf.
* The height of the root node is also teh height of the tree itself. Once you find the leaf node furthest from the root, you know the longest possibel path.
* There exist balanced and unbalanced trees.
* A tree is considered to be balanced if any two sibling subtrees do not differ in heigh by more than one level. If two sibling subtrees differ more than one level in height then the tree is unbalaanced.
* Knowing if a tree is balanced or unbalanced is important to know how to interact with that tree (traversal, etc).
* Example of trees - in OO languages, teh main object is the root node, while classes that inherit from it are its children. 
* Example of trees - a file structure of a project. You have a root directory with child nodes that are subdirectories and leaves that are just files.