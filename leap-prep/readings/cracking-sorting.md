### Cracking the Coding Interview: Sorting and Searching
* In bubble sort, we start at the beginnign of the array and swap the first elements if the first is greater than the second. The, we go to the next pair, and so on, continuously making sweeps of the array until it is sorted. In doing so, the smaller items slowly bubble up to the beginning of the list.
* Bubble Sort Runtime - O(n^2). Memory - O(1)
* Selection sort is done by finding the smallest element using a linear scan and moving it to the front (swapping it with the front element). Then, find the second smallest, and move it doing a linear scane. Continue doing this until all the elements are in place.
* Selection Sort Runtime - O(n^2). Memory - O(1)
* Merge sort divides the array in half, sorts each of those halves, and then merges them back together. Each of those halves does the same sorting algorithm applied to it. Eventually, you are merging just two single element arrays. 
* The merge method, in merge sort, operates by coping all the elements from the target array segment into a helper array, keeping track of where the start of the left and right halves should be. Then iterate thourgh the helper array, copying the smaller elements from each half into the array. At the end, we copy any remaining elements into the target array.
* Merge Sort Runtime - O(n log n). The space complexity depends.
`function mergesort(arr, helper, low, high) {
    if(low < high) {
        const mid = (low + high)/2;
        // sort left half
        mergesort(arr, helper, low,  mid); 
        // sort right half
        mergesort(arr, helper, mid+1, high);
        // merge halves
        merge(arr, helper, low, mid, high);
    }
};

function merge(arr, helper, low, mid, high) {
    for(let i = 0; i <= high; i++) {
        helper[i] = arr[i];
    }
    const helperLeft = low;
    const helperRight = mid + 1;
    const current = low;

    // iterate through helper array
    // compare left and right halves
    // copy the smaller element from
    // the two halves into the
    // original array
    while (helperLeft <= mid && helperRight <= high) {
        if(helper[helperLeft] <= helper[helperRight]) {
            arr[current] = helper[helperRight];
            helperRight++;
        }
        current++;
    }

    // copy the rest of the left side
    // into the target array
    const remaining = middle - helperLeft;
    for(let i = 0; i <= remaining; i++) {
        arr[current + i] = helper[helperLeft + i];
    }
};`
  
* In quick sort, we pick a random element and parittion the array, such that all numbers that are less than the partitioning element come before all elements that are greater than it. The paritioning can be performed efficiently thorugh a series of swaps.
* If we repeatedly partition the array (and its subarrays) around an element, the array will eventually become sorted. However, as the paritioned elemet is not guaranteed the median (or anywhere near the median), our sorting could be very slow.
* Quick Sort Runtime - O(n log n). Worst case runtime O(n^2). Space complexity - O(log n).
`function quickSort(arr, left, right) {
    const index = partition(arr, left, right);
    // sort left half
    if (left < index - 1) {
        quickSort(arr, left, index - 1);
    }
    // sort right half
    if (index < right) {
        quickSort(arr, index, right);
    }
}

function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right)/2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }

        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
};`
  
* Radix Sort is a sorting algorithm for integers that take advantage of the fact that integers have a finite number of bits. In radix sort, we iterate through each digit of the number, grouping numbers by each digit.
* For example, if we have an array of integers, we might first sort by the first digit, so that all the 0s are grouped together. Then, we sort each of these grouping by the next digit. We repeat this process sorting by each subsequent digit, until the whole array is sorted.
* Radix sort has a runtime of O(kn), where n is the number of elements and k is the number of passes of the sorting algorithm.
  
* In binary search, we look for an element x in a sorted array by first comparing x to the midpoitn of the array. If x is less than the midpoint, then we search the left half of the array. If x is greater than the midpoint, then we search the right half of the array. We then repeat this process, treating the left and right halves as subarrays. Again, we compare x to the midpoint of this subarray and then search either its left or right side. We repeat this process until we either find x or the subarray has a size 0.
* Binary Search Recursive Implementation
`function binarySearchRecursive(arr, x, low, high) {
    if(low > high) return -1;
    const mid = (low + high) / 2;
    if (arr[mid] < x) {
        return binarySearchRecursive(arr, x, mid+1, high);
    } else if (a[mid] > x) {
        return binarySearchRecursive(arr, x, low, mid-1);
    } else {
        return mid;
    }
};

function binarySearchIterative(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high)/2);
        if(arr[mid] < x) {
            low = mid + 1;
        } else if (arr[mid] > x) {
            high = mid = 1;
        } else {
            return mid;
        }
    }
    return -1;
};` 
* You are not limited to searching with binary search. You can search for a node by leveraging a binary tree or hash table.
  
Chosen Questions:
* 10.2 - Group Anagrams
Write a method to sort an array of strings so thtat all the anagrams are next to each other.
* 10.6 - Sort Big File
Imagine you have a 20GB file with one string per line. How would you sort the file?
* 10.9 - Sorted Matrix Search 
Given an M x N matrix in which each row and each column is sorted in ascending order, write a method to find an element.
* 10.11 - Peaks and Valleys
In an array of integer, a peak is an element which is greater than or equal to the adjacent integers. A valley is an element which is less than or equal to the adjacent integers.
Given an array of integers, sort the aray into an alternating sequence of peaks and valleys.