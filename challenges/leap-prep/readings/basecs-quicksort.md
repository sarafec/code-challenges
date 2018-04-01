#### BaseCS: Pivoting to Understand Quicksort
* Quicksort is also a divide an conquer algorithm.
* Quicksort chooses a pivot point from a collection of elements. It partitions the collection around the pivot, so that the elements smaller than the pivot are moved before it and the elements larger than the pivot are moved after it.
* Even when the list isn't completely sorted, we know that the items are in teh correct order in relation to the pivot. This means that we never have to compare elements on teh left side of teh parition to elements on teh right side of the partition. We already know they are in their correct spot in relation t the pivot.
* In an ideal quicksort algorithm, the pivot would always be the middle-most element, so that when we parition the list into sublist, they would be equal in size.
* Quicksort sorts the elements by swapping. 
* The way that quicksort goes about sorting elements into their respective parititons after choosing a pivot is by keeping reference to elements at either end of the array or list and then comparing the elements at those references to the pivot.
* If quicksort determines that two elements are out of order, it leans on its references to swap them into their correct place in the collection.
* Outline of quicksort  
1) Choose a pivot  
2) Create a left reference, pointing to the element at the lowest index  
3) Create a right index, pointing to the element at the highest index (not pivot)   
4) While the left reference is less than the pivot, move the pointer one element to the right. While the right reference is greater than the pivot, move teh pointer one element to the left.
5) If both left reference is greater than the pivot and right reference is smaller than the pivot, swap the elements at the two references.
6) Once the index of the left reference is greater or equal to the index of the right reference, swap the pivot with the element at the left reference.

* Once we finish going through all our elements, our left reference will "pass" our right rerference. At this point, we can move the pivot into its correct place by swapping it with the item at the left reference.
* The item at the left reference moves to the end of the right partition, and ends up becomign the new pivot for that sublist.

Example of Swap Function - 
`function swap(items, leftPointerIndex, rightPointerIndex) {
    let tempReference = items[leftPointerIndex];
    items[leftPointerIndex] = items[rightPointerIndex];
    items[rightPointerIndex] = tempReference;
};`
  
* If we choose a pivot that doesn't fall close to the median of the dataset we're trying to sort, we'll have to compare it to all elements.
* The timple complexity of quick sort is dependent on what we chose to be our parition adn how sorted the list already is.
* Do not use quicksort for mostly sorted lists.

Example of Quicksort - 
```
funciton quickSort(items, leftIndex, rightIndex) {
    let pivotIndex;

    // we partition the arr if it has two items in it
    if(items.length > 1) {
        pivotIndex = parititon(items, leftIndex, rightIndex);

        // if the left reference hasn't been incremented to reach the pivot, we keep comparing
        if(leftIndex < pivotIndex - 1) {
            quickSort(items, leftIndex, pivotIndex - 1);
        }
        // if the left reference hasn't been incremented to reach the pivot, we keep comparing
        if(pivotIndex < rightIndex) {
            quickSort(items, pivotIndex, rightIndex);
        }
    }
    return items;
};

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let l = left;
    let r = right;

    // Once the left reference is greater than the right reference,
    // we have finished sorting this set of items, and we can return.  
    while (l <= r) {

        // If the left pointer is less than the pivot, increment it.
        while(items[l] < pivot) {
            l++;
        }

        // If the right pointer is greater than the pivot, decrement it.    
        while(items[r] > pivot) {
            r--;
        }

        // If the left pointer is larger than the pivot, and the right
        // pointer is not bigger than the pivot, swap the two elements.
        if(l <= r) {
            swap(items, l, r);
            l++;
            l--;
        }
    }
    // new pivot
    return l;
};
```
  
* Summary: Quicksort has a time complexity of O(n log n) in the average case. It's operations are done in place, but requires O(log n) memory for pointers. It is an unstable sort. It sorts internally, recursively, and it is indeed a comparison sort.
* Quick sort is great is we don't care about maintaining the order of our items, we need an algorithm that can fit all of our data to be sorted into memory, and we'll never have to deal with data that's already sorted or mostly sorted.
* One way to optimize which our pivots to choose is by takign the median of the last few elements in the list.