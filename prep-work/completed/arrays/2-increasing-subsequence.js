function findIncreasingSubsequenceCount (arr) {
let count = 0,
     countArr = [];

if (arr.length === 0) return 0;
if (arr.length === 1) return 1;

arr.forEach((entry, index) => {
		if (entry <  arr[index + 1]) {
			count++;
		} else {
			countArr.push(count);
			count = 0;
		}
});

return Math.max(...countArr);
}
