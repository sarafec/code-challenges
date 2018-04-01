/*
10.6 - Sort Big File
Imagine you have a 20GB file with one string per line. 
How would you sort the file?

If a interview gives you a size limit, it suggests that 
you don't what to bring all the data into memory.
We'll only bring part of the data into memory.

So, we'll divide the files into chunks, which are x megabytes each,
where x is the amount of memory we have available. Each chunk is sorted
separately and then saved back to the file system.
Once all the chunks are sorted, we merge the chunks, one by one. At the end,
we have a fully sorted file.

This is known as external sort.
*/