#### BaseCS: Making Sense of Merge Sort
* A merge sort algorithm sorts a collection by breaking it into half. It then sorts those two halves, and then merges them together, in order to form one, completely sorted collection.
* Conceptually, merge sort assets that instead of one unsorted list, it's a lot easier to sort and join twogehter tow sorted lists.
* Merges sort uses divide an conquer. Divide and conquer is a technique that divides the problems into smaller subproblems. In other words, itn breaks down the problems into simpler versions of itself.
* The basic steps of a divide and conquer algorithm - 
1) Divide and break upthe problem  into the smallest possibel subproblem.  
2) Conquer and tackle the smallest subproblem first.   
3) Once you've figure out a solution that works, use that exact same technique to solve the larget subproblems (recursively).  
4) Combine the answers and build up the smaller subproblems until you finally end up applying teh same solution to the larger, more complicated problem that you started off with.  
* To break our problem down to the smallest possible subproblem. We need the problem to reach our base case. At that point, we've solved the problem and can work our way back up.
* In the context of binary trees, the base case is the single leaf node.  

Example of Merge Sort
`function mergeSort(arr) {
    let arrSize = arr.length;

    if(arrSize === 1) {
        return;
    }

    let midpoint = Math.floor(arrSize/2);
    let leftArr = arr.slice(0, midpoint);
    let rightArr = arr.slice(midpoint);
    mergeSort(leftArr);
    mergeSort(rightArr);

    merge(leftArr, rightArr, arr);

    return arr;
};

function merge (leftArr, rightArr, arr) {
    let index = 0;
    while (leftArr.length && rightArr.length) {
        if(rightArr[0] < leftArr[0]) {
            arr[index++] = rightArr.shift();
        } else {
            arr[index++] = leftArr.shift();
        }
    }
    while(leftArr.length) {
        arr[index++] = leftArr.shift();
    }

    while(rightArr.length) {
        arr[index++] = rightArr.shift();
    }
};`

* The merge sort algorithm divides a collection into half, sorts each half recursively, and then merges them back together.
* The most expensive part of the algorithm is merging. The work of putting back together the small sublists in a sorted format.
* The breaking down of the list happens in O(log n). If we multiple the log of n by the value of n, teh result ends up being the number of total append operations to perform.
* Summary: merge sort has a time complexity of O(n log n), it is performed out-of-place, it is a stable sorting algorithm, it is does externally, recursively and it is a comparison sort.
* Merge sort needs O(n) memory in order to copy over elements as it sorts.
* That required memory is the biggest draw back of merge sort.