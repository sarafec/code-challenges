### BaseCS: Busying Oneself with B-Trees
* A b-tree is a self-balancing tree data structure that is a variation on binary search trees, btu allows for more than 2 child nodes. They are particularly useful for handling data that cannot fit into main memory.
* The b in b-trees represents the branching factor or minimum degree. We use b to determine the boudn factor of how many possible children a node can have and how many possible keys a node can contain.
* The number of children per node in a b-tree can be described as B <= x < 2B, where B is the branchign factor, and x represents the number of children per node. 
* The number of keys possible per node in a b-tree is B-1 <= x < 2B-1.
* When searching for a key in a b-tree, at each node, we need to iterate and compare the keys, which are already in sorted order, in order to decide which subtree to check next.
* Deleting from a b-tree is easy to do if the node we're deleting from has another key. If the node only has one key the best technique is to use rotation. In a roation, we take the nearest in order sibling element and replace the paren with that key and move the parent down to fill the empty key.
* B-trees are very efficient for storing dta in an indexed database (i.e. MySQL). 
* It is very easy for a database to read a section of a disk at a time because most B-trees have a B value (branching factor) that is equivalent to the size of a block of data. Caches are often maped to entire sections of the B-tree at a time, which means that a database could pull an entire section out at once and read whatever values it needs from without having to make tons of additional calls again and again.

Further Research:
* [Deconstruct implementation](https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/)
* [An Introduciton to B-trees](https://www.youtube.com/watch?v=C_q5ccN84C8)