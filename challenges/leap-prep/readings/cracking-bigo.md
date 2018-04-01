### Cracking the Coding Interview: Big O
* Quick sort picks a random element as a pivot and then swaps values in the array such that the elements less than pivot appear before elements greater than pivot. This creates a partial sort. Then it recursively sorts the left and right sides.
* Quick sort, best case - if all elements are equal, then quick sort will, on average, just traverse through the array once. Its running time is O(n).
* Quick sort, worst case - if we get unlucky and the pivot is repeatedly the biggest element in the array then our recursion doesn't divide the array in half and recurse each size, it just shrinks the sub array by one element. The running time is O(n^2).
* Quick sort, expected case - sometimes the pivot will be very low or very high, but it won't happen over and over again. The expected runtime is O(n log n).
* When discussing Big O, it is rare to talk about the best case time complexity.
* For many algorithms the worst case and expected case time complexity are th esame.
* In addition to time, we care about the amount of memory required by an algorithm.
* Be aware, stack space in recursive calls counts too. But, entering the stack isn't the problem. It is when they exist simultaneously on the call stack.
* Big O describes the rate of increase. For this reason, we drop the constants in runtime.
* When you have A chunks of work then B chunks of work, the total amount of work is O(A + B).
* When you have B chunks of work for each element of A, the total amount of work is O(A * B).
* If your algoritm is in the form "do this, when you're all done do that" then you add the runtimes.
* If your algorithm is in the form "do this for each time you do that" then you multiply the runtimes.
* When you see a problem where the number of elements in the problem space gets halved each time, it'll likely be a O(log n) runtime.
* Example of O(log n) runtime - when you're finding an element in a balanced binary search tree it is O(log n) because with each comparison we can go either left or right. Half of the nodes are on each side, so we cut the problem space in half each time.
* When you have a recursive function that makes multiple calls, the runtime will often look like O(branches^depth), where branches are the number of times each recursive call branches. 
* The base of a log doesn't matter for big O because logs of different bases are only different by a constant factor. However, the base of an exponent does matter. 

Further work:  
* Consider running through the examples and additional problems in the book.