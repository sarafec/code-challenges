/*

data structure: heap sort

work left to do:
1 - add explaination
2 - clean up code
3 - test

*/

function swap(data, i, j) {
    let tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
}
 
function heapSort(arr) {
    orderArray(arr);
    end = arr.length - 1;
    while(end > 0) {
        swap(arr, 0, end);
        shiftElemDown(arr, 0, end);
        end -= 1;
    }
}
 
function orderArray(arr) {
    let i;
    i = arr.length / 2 - 1;
    i = Math.floor(i);
    while (i >= 0) {
        shiftElemDown(arr, i, arr.length);
        i -= 1;
    }
}
 
function shiftElemDown(heap, i, max) {
    let i_big, c1, c2;
    while(i < max) {
        i_big = i;
        c1 = 2*i + 1;
        c2 = c1 + 1;
        if (c1 < max && heap[c1] > heap[i_big])
            i_big = c1;
        if (c2 < max && heap[c2] > heap[i_big])
            i_big = c2;
        if (i_big == i) return;
        swap(heap,i, i_big);
        i = i_big;
    }
}