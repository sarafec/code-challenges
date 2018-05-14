/*

The width of a binary tree is the number of vertical paths in the tree.

We will use the same approach used when printing a vertical view of the binary tree. We'll store the horizontal distances in a set and return 1 + horizontal distance - lowest horizontal distance.

While going left, we'll do horizontalDistance - 1 and for right do horizontalDistance + 1. We insert all possible possible distances in the set and return the size of the set.

*/


function findVerticalWidth(root) {
	const set = new Set();
	fillSet(root, set, 0);
	return set.size();

}

function fillSet(root, set, hDist) {
	if (root === null) return;
	fillSet(root.left, set, hDist -1);
	set.add(hDist);
	fillSet(root.right, set, hDist + 1);
}
