function binarySearch(arr, value){
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((right - left)/2);

        if(arr[mid] === value) {
            return true;
        } else if (value < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}