#### BaseCS: Heapify All the Thing With Heap Sort
* Heaps are a special kind of binary tree that follows a strict set of rules, and are used to implement things like priority queues and background jobs.
* Binary heaps are also used for efficient sorting.
* For heap sort, we'll use max heap, where every parent node (including the root) is greater or equal to the value of its child nodes.
* A heap sort algorithm is a sorting technique that is based exclusively on a binary heap data structure. It involves finding teh largest (maximum) element and sorting it at the end of an unsorted collection.
* Steps for heap sort -  
1) Build a max heap with all our data  
2) Once the largest (max-value) item is at the root node of the heap and every parent node is larger than its children, we'll swap the largest value with teh item at the end of the heap.  
3) The last item might be in the right place, bu the root node probably isn't. We'll move down teh root node item to its correct place usign a heapify function.  
4) If the root node is in the correct place, it is considered sorted and we remove it from the heap.  
5) Once we get rid of the root we need to go reorder our root by placing the last item in the heap back at the top.  
6) Repeat this process until no nodes left in the heap.  

* Heap sort is like selection sort in that it finds the largest element in an unsorted collection and orders it at the back of the list, but it does it faster because it uses heaps.  

Example code for heap sort
`function heapSort(arr) {
    // heap builder method
    buildMaxHeap(arr);
    lastElement = arr.length - 1;

    while(lastElement > 0) {
        swap(arr, 0, lastElement);
        heapify(arr, 0, lastElement);

        lastElement -= 1;
    }
};

function buildMaxHeap(arr) {
    let i;
    i = Math.floor(arr.length / 2 - 1);

    while (i >= 0) {
        heapify(arr, i, arr.length);
        i -= 1;
    }
};

function heapify(heap, i, max) {
    let var,
        leftChild,
        rightChild;

    while(i < max) {
        index = i;
        leftChild = 2*i + 1;
        rightChild = leftChild + 1;

        if(leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if (rightChild < max && heap[rightChild] > heap[index]) {
            index = rightChild;
        }

        if (index === i) {
            return;
        }

        swap(heap, i, index);

        i = index;
    }
};

function swap(array, firstItemIndex, lastItemInde) {
  var tmp = array[firstItemIndex];
  
  array[firstItemIndex] = array[lastItemInde];
  array[lastItemInde] = tmp;
};`

* Summary: Heap sort has a time complexity of O(n log n). In performs its comparisons in place. It is unstable, internal, and non-recursive.