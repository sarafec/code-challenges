### Cracking the Coding Interview: Linked Lists
* A linked list represents a sequence of nodes. In a singly linked list, each node poitns to the next node in the linked list. A doubly linked list gives each node pointer to both the next node and the previous ndoe.
* The benefit of a linked list is that you can add and remove items from the beginning of the list in constant time.
* If you want to find an item in the list, you'll need to iterate through.
* Deleting a node from a linked list - given a node n, we find th eprevious node prev and set prev.next equal to n.next. If the list is doubly linked, we must also update n.next to set n.next.prev equal to n.prev. 
* When deleting a node from a linked list, check for null pointers and update the headtail as necessary.
* The runner (or second pointer) technique is used in many linked list problems. The runner technique means that you iterate through the linked list wiht two pointers simultaneously, with one ahead of the other. The "fast" node might be ahead by a fixed amount, or it might be hopping multiple nodes for each one node that the slow node iterates through.
* Example of when you might use the runner technique - if you wanted to rearrange your nodes but you didn't know the midpoint or end, you could have one pointer iterate twice as fast as the second pointer. And when the first pointer reaches the end, the second pointer will be at the midpoint.
* Some linked list problems rely on recursion. If you're having trouble solving a linked list problem, try to explore a recursive apporach. 
* Keep in mind that ercursive algorithms take at least O(n) space, where n is the depth of the recursive call.
* Also keep in mind, all recursive algorithms can be implemented iteratively, although it may be much more complex.

Chosen Questions: 
* 2.3 Delete Middle Node
Implement an algortihm to delete a node in the middle (not necessarily the exact middle, just not first or last) of a singly linked list, only given access to that node.
* 2.4 Partition
Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the eleements less than x. The partion element x can appear anywhere in the right partiion - it doesn't need to appear between the left and right partitions.
* 2.8 Loop Detection
Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
A circular linked list is a corrupt linked list in which a node's next pointer points to an earlier node, as to make a loop in the linked list.
