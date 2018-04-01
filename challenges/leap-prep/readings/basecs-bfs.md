### BaseCS: Breaking Down Breadth-First Search
* Depth-first search is the process of traversing down through one branch of a tree until we get to a leaf, and then working our way back to the trunk of the tree.
* Implementing a DFS means traversing down through the subtrees of a binary search tree.
* Breadth-first search involves searching through a tree one level at a time.
* In BFS, we traverse through one entire level of children nodes first, before moving on to traverse through the grandchildren nodes. And we traverse through the grandchildren nodes. And we traverse through an entire level of grandchildren nodes before going onto traverse through great grandchildren nodes.
* DFS is written as  arecursive function and can cause the call stack to grow to be as big as the longest path in the tree. It also uses a stack (for the call stack).
* Implementing DFS using a stack allows us to traverse through the subtree of a binary search tree, each of the nodes that we "check" or "visit" gets added to the stack. Once we reach a leaf node (a node that has no children) we start popping off the nodes from the top of the stack. we end up at the root node again, and then can continue to traverse down the next subtree.
* In BFS, we need to keep a reference too all the child nodes of every node that we visit, otherwise we'll never be able to go back to them later and check or visit them. For that, we use a queue.
* The nice thing abotu usign queues is that it allows us to keep a reference to nodes that we want to come back to, even though we haven't checked/visited them yet.
* A discovered node is one that we add to our queue, whose location we know but haven't actually visited yet.
* Using queues to implement BFS - to start the root node will be the only discovered node. Once we heavne at least one node enqueued (or our queue isn't empty) we can start visiting the nodes and enqueing their children. Then - visit the node(print its value), enqueue left child, enqueue right child.
* Visiting a node (reading its data and enqueing its childre) takes constant time. Since we are only visiting each node once, the time it will take us to use a BFS is O(n), whre n is the number of nodes.
* The space complexity depends on the size of the queue at its worst, which could be up to O(n).