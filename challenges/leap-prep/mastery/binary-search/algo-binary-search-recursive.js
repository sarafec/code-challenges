/*

Explaination:
The recursive solution has its "range pointers" given as parameters
and continues to cut the search array in half (by using the "range 
pointers") on each run through.

*/

function binarySearch(array, value, left, right) {
    if (left > right) {
      return -1;
    }
    var mid = Math.floor((right + left) / 2);
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] > value) {
      return binarySearch(array, value, left, mid - 1);
    } else {
      return binarySearch(array, value, mid + 1, right);
    }
  }