// adapted from https://www.geeksforgeeks.org/knapsack-problem/
// recursive solution

function knapSack(capacity,  weights, val, num) {
   // Base Case
    if (num === 0 || capacity === 0)
        return 0;
    
    // If weight of the nth item is more than Knapsack capacity, then this item cannot be included in the optimal solution
    if (weights[num-1] > capacity) {
        return knapSack(capacity, weights, val, num-1);
    
    // Return the maximum of two cases: 
    // (1) nth item included 
    // (2) not included
    } else {
        return Math.max(val[num-1] + knapSack(capacity-weights[num-1], weights, val, num-1), knapSack(capacity, weights, val, num-1));
    }
}