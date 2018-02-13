#### BaseCS: Less Repetition, More Dynamic Programming
* Dynamic programming is an approahc to solving complex problems by breaking them down into their smaller parts, and storing the resutls to these subproblems so that they only need to be computed once.
* A dynamic programming algorithm solves a complex problem by breaking it down into smaller parts. After a DP algorithm breaks down a problem into smaller pieces, it stores the results to these subproblems after computing them.
* Algorithms like Dijkstra's algorithm are considered to be greedy because they choose the best possible option in the moment and then solve whatever subproblems arise from the choices that they made.
* Dijkstra's algorithm is considered to be a greedy algorithm because it picks the vertex to which there is a shortest path currently known. It doesn't exhaustively serach through all of the subproblems of the graph. Instead, it iteartively choses the best vertex to visit based on edge weight, making the greedy choice.
* Divide and Conquer algorithms divide a problem into simpler version of itself. Apply a solution for smaller subproblems to a larger problem. Combine the answers to the subproblems recursively. Example - mergesort.
* Greedy algorithms optimize by making the choice that is best in the moment. Choose the locally optimal option, hoping it will lead to the globally optimal solution. Example - Dijkstra's algorithm.
* Dynamic programming algoirthms break a problem down into sub problems. The subproblems are overlapping and recurring. DP will calculate them only once and save their values. We sacrifice space to save time by remembering old subproblem values. Example - memoized fibonacci.
* One major difference between divide and conquer and dynamic programming - when we break down the larget problem into smaller parts the subproblems overlap.
* A dynamic programming algorithm will exhaustively search through all of the possible subproblems and then choose the best solution based on that. 
* The trick to calculating all of the various subproblems (and then choosing the best one) is remembering previous solutions.
* Dynamic programming allows us to avoid repeating ourselves and repeating bits of work by remembering partial portions of problems that we have already solved along the way.
* We can use memeoization to remember the problems that we've seen before and already solved so as not to resolve them. When we solve a problem by breaking it down into subproblems, we check to see if that subproblem has already been solve before. If so, there is no need to recompute it.
* Fibonacci solved recursively without memoization takes exponential time O(n^2). Fibonacci solved with memoization is O(n).
* The cost of looking up a memoized value is O(1).