#### Notes from BaseCS: Sorting Out the Basics Behind Sorting Algorithms
* Sorting is useful because it makes a set of data more readable and it makes it easy to search/retrieve an item from a set of data.
* Sorting, in the context of computer science, is the organizing of a set of similar items in a collection by some property.
* We can sort a collection of items in either increasing or decreasing order by any one property. That property can be size, lexicographical (alphabetical) order, numerical order, date, time, and more.
* We can only sort a dataset where items are homogenous or are of the same type. It needs to have a shared property to sort by.
* Binary search is a greay way to insert, delete, read, or retreive data from a large sorted dataset.
* Sorts have classifications - time complexity, space complexity, stability, internal vs. external, recursive vs. non-recursive, comparison vs. non-comparison
* The classifications of sorting algorithms will help us choose which one to implement for our given problem
* Time Complexity (Big O) shows how much time a sorting algorithm takes with respect to its input size
* Space complexity shows the amount of space/memory that a sorting algorithm needs to sort its input. In place sorting O(1) operates directly on the dataset and changes it. Out of place sorting copies the dataset to make sorting changes on a copied version.
* Stable sorting algorithms preserve the relative order of elements when faced wih an equal key (on the property by which the data set is being sorted).
* If the items that need to be sorted are in main memory/RAM, teh algorithm is an internal sort.
* If the records to be sorted cannot be stored in main memory and teh sorted data occurs outside of main memory, such as on a disk or tape, the algorithm is an external sort.
* A recursive sorting algorithm splits the large data input into smaller inputs, recursively sorting those, and then combines the result to produce one large sorted collection.
* Non-recursive algorithms don't recursively call upon themselves.
* Note - algorithms that are  classified as recursive could be implemented iteratively.
* A comparison sort is any sorting algorithm that uses only a comprison between two pairs of items to sort a larger dataset.
* A comparator defines the ordering and is used to compare any two items at a time.
* Algorithms without a comparator are referred to as non-comparison sorts.
