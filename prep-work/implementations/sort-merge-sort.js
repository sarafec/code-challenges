function mergeSort(items) {
	if (items.length < 2) return items;

	let mid = Math.floor(items.length / 2),
		left = items.slice (0, mid),
		right = items.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [],
		indexL = 0,
		indexR = 0;

	while (indexL < left.length && indexR < right.length) {
		if (left[indexL] < right[indexR]) {
			result.push(left[indexL++]);
		} else {
			result.push(right[indexR++]);
		}
	}
	return result.concat(left.slice(indexL)).concat(right.slice(indexR));
};
