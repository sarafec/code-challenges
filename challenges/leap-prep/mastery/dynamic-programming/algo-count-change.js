// adapted from https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/
//Time complexity of this function: O(mn)
//Space Complexity of this function: O(n)

function countWays(coinArr, arrLength, num) {
    // table[i] will be storing the number of solutions for value i. We need n+1 rows as the table is constructed in bottom up manner using the base case (n = 0)
    let table = Array(num).fill(0);

    // Base case (If given value is 0)
    table[0] = 1;

    // Pick all coins one by one and update the table[]
    // values after the index greater than or equal to
    // the value of the picked coin
    for (let i = 0; i < arrLength; i++)
        for (let j = coinArr[i]; j <= num; j++)
            table[j] += table[j-coinArr[i]];

    return table[num];
}