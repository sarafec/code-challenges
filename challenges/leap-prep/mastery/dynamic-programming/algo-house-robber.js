function maxLoot(houses, n) {
    if (n == 0)
        return 0;
    if (n == 1)
        return houses[0];
    if (n == 2)
        return Math.max(houses[0], houses[1]);

    // dp[i] represent the maximum value stolen so far after reaching house i.
    let dp = [];

    // Initialize the dp[0] and dp[1]
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    // Fill remaining positions
    for (let i = 2; i<n; i++)
        dp[i] = Math.max(houses[i]+dp[i-2], dp[i-1]);

    return dp[n-1];
}