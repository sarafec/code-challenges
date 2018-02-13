function binarySearch(array, key, left, right) {
    if (left > right) {
      return -1;
    }
    var mid = Math.floor((right + left) / 2);
    if (array[mid] === key) {
      return mid;
    } else if (array[mid] > key) {
      return binarySearch(array, key, left, mid - 1);
    } else {
      return binarySearch(array, key, mid + 1, right);
    }
  }