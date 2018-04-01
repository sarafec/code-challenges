### Learning to Love Heaps
* A heap is a binary tree with two special properties - it must have all of its nodes in a specific order and its shape must be complete.
* Binary heaps in particular are heaps shaped exactly like binary trees.
* The two special properties of heaps boil down to shape of the tree and order of the tree's nodes.
* A heap must be a complete binary tree, meaning that all of the levels of the tree must be completely filled except maybe the last one. The last level must have the left-most nodes filled.
* A heap's root node must have all of its children be either greater than or equal to its children (min-heap) or less than or equal to its children (max-heap).
* The basic rule for the order of a heap is that parent nodes (including the root node) of a heap must either be greater than or equal to the value of its children nodes, or less than or equal to the value of its children nodes.
* When adding to a heap, only ever add an item/node at the left-most available spot in the tree - the lowest level, and the left-most available node spot.
* When removing items from a heap, we can remove and replace teh root node with its left-most, lowest level leaf node. But, we'll then need to do some swapping to get the shape back.
* A heap can be implemented as a linked list or as an array.
* An improtant aspect of a heap is that the max or min value element is always the root node.
* A benefit of representing a heap as an array is that if we know the index of the root node,w e can manipulate that index to determine where its child nodes live in the array. 
* We can use index-based algorithms to determine which elements are chid nodes of other elements in the array.
* If a parent node's index is represente dby index i in an array, then its left child will always be located at 2i + 1 and it's right child will always be located at 2i + 2.
* Taking a child node's index you can find the parent by finding the floor of (n-1)/2 or (n-2)/2 for the left or right child respectively.
* Heaps are often implemented as arrays ebcause they are an efficient way of reprsenting priority queues.
* A priority queue is a queue data structure with some additional properties. Every item has a priority (usually an integer). An item with a high priority is dequeued before an item with a low priority. Two items with an equal priority are dequeued based on their order in the queue.
* Using binary heaps as priorty queues - finding max/min element is constant O(1). Insertion/deletion takes logarithmic time O(log n).
