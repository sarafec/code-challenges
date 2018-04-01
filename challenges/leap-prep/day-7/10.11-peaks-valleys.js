/*
10.11 - Peaks and Valleys
In an array of integer, a peak is an element which is greater than or equal to 
the adjacent integers. A valley is an element which is less than or equal to the adjacent integers.
Given an array of integers, sort the aray into an alternating sequence of peaks and valleys.

For the suboptimal solution -
We'll sort the array in ascending order
We'll itearte through the elements, starting from index 1 and jumping two elements at a time
At each element, we'll swap it with the previous element
Since every three elements appear in order, swappign these elements will always put medium as peak
This ensures peaks are at the right place as long as the odd-numbered elements are bigger than the
adjacent elements. Then the even-numbered elements (the valleys) must be smaller than the adjacent elements.

Optimal approach - 
To optimize, we need to cut out teh sorting step
For each element, we'll look at the adajcement elements. 
If the center element needs to be the peak, then two of the sequences work.
We can swap the center element with the largest adjacent element.
If we make sure the peaks are in the right place, we know the valleys are in the
right place.


*/

// naive approach
// runtime - O(n log n)
function sortvalleyPeak(arr) {
    arr.sort(function(a,b) {
        return a - b;
    });

    for (let i = 0; i < arr.length; i+= 2) {
        swap(arr, i - 1, i);
    }
};

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp; 
}

// optimal approach
// runtime - O(n)
function sortValleyPeak2(arr) {
    for (let i = 1; i < arr.length; i+= 2) {
        let biggestIndex = findMaxIndex(arr, i - 1, i, i + 1);
        if (i !== biggestIndex) {
            swap(arr, i, biggestIndex);
        }
    }
};

function findMaxIndex(arr, a, b, c) {
    let len = arr.length;
    let aValue = a >= 0 && a < len ? arr[a] : Number.MIN_SAFE_INTEGER;
    let bValue = b >= 0 && b < len ? arr[b] : Number.MIN_SAFE_INTEGER;
    let cValue = c >= 0 && c < len ? arr[c] : Number.MIN_SAFE_INTEGER;

    let max = Math.max(aValue, Math.max(bValue, cVaue));
    if (aValue === max) {
        return a; 
    } else if (bValue === max) {
        return b;
    } else {
        return c;
    }
    
}

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp; 
};
