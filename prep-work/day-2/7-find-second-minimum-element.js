/* Find Second Minimum Element in Array using 2n Comparisons */

/*

Explanation: We can construct a tree similar to a tournament tree.
Each element in the array will be a leaf node.

To build the tree, we compare all adjacent pairs of element with eachother.
From each pair, the smaller element forms the level above. 
Find the smaller elements of those smaller elements. 
Continue this process until a root node is created.
The root is the minimum. Therefore, we traverse the tree, discarding the subtrees
whose root is greater than the smallest element. Before discarding, we 
update the second smallest element. 

Because the tree is height balanced, we have to spend log n time traversing
all the elements that were ever compared to the minimum. 

Running time: O(n log n)
Space Complexity: O(n) 


Note: add solution after looking into the methods in C++ methods for list<Node *>
Specifically, pop_front() and push_back() 
Are these C++ methods for a specific data structure? What is the JS equivalent?


*/

