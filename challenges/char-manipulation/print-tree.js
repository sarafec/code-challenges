// problem - write a function that prints a pine tree with N rows
// running time - O(n)
// space complexity - O(1)


// follow-up
// write the built-in repeat fn from scratch		[]


function printTree (height) {
	const topPiece = '*';
	const strucPiece = '-';
	const spacePiece = ' ';

	if (height === 0)
		return 'no tree';

	// print tree topper
	console.log(spacePiece.repeat(height) + topPiece);
	for(let i = 0; i < height; i++) {
		console.log(spacePiece.repeat(height - i) + strucPiece.repeat(i * 2 + 1));
	}
}

printTree(12);