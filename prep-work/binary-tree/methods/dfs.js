/*

Trees can be traversed in different ways. There are three types of depth first traversals - inorder, preorder, and postorder/

Inorder - left, root, right
Preorder - root, left, right
Postorder - left, right, root

Common uses of inorder traversal - in the case of bsts,  in order traversal gives nodes in increasing order. To get the nodes in decreasing order, reverse the inorder traversal.

Common uses of preorder traversal - if you want to get a copy of the tree use preorder traversal. Preorder traversal is also used to get the prefix expression of an expression tree (i.e. used in polish notation).

Common uses of postorder traversal - if you want to delete the tree, use postorder traversal. Postorder traversal is also useful to get the postfix expression of an expression tree (i.e. used in reverse polish notation).

The running time is O(n).
The space complexity is O(n).

*/

function printInOrder(node) {
	if (node === null) return;

	printInOrder(node.left);
	console.log(node.data);
	printInOrder(node.right);
}

function printPreOrder(node) {
	if (node === null) return;

	console.log(node.data);
	printPreOrder(node.left);
	printPreOrder(node.right);
	
}

function printPostOrder(node) {
	if (node === null) return;

	printPostOrder(node.left);
	printPostOrder(node.right);
	console.log(node.data);
}
