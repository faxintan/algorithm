/**
 * 凑零钱问题
 * 
 * 题目：给你k种面值的硬币，面值分别为c1, c2 ... ck，
 * 每种硬币的数量无限，再给一个总金额amount，问你最少
 * 需要几枚硬币凑出这个金额，如果不可能凑出，算法返回-1 
 */

/**
 * 1. 暴力递归
 * 
 * @列出正确的状态转移方程
 * 1.先确定「状态」：原问题和子问题中变化的变量，由于硬币数量无限，所以唯一的状态就是目标金额
 * 2.然后确定「dp」：函数 dp(n)表示，当前的目标金额是n，至少需要dp(n)个硬币凑出该金额
 * 3.然后确定「选择」：对于每个状态，可以做出什么选择改变当前状态。无论目标金额是多少，选择就是从面额列表coins中选择一个硬币，然后目标金额就会减少
 * 4.最后明确「base case」：显然目标金额为 0 时，所需硬币数量为 0；当目标金额小于 0 时，无解，返回 -1
 * 
 * @example
 * ```
 * def coinChange(coins: List[int], amount: int):
 *     # 备忘录
 *     memo = dict()
 *     def dp(n):
 *         # 查备忘录，避免重复计算
 *         if n in memo: return memo[n]
 * 
 *         if n == 0: return 0
 *         if n < 0: return -1
 *         res = float('INF')
 *         for coin in coins:
 *             subproblem = dp(n - coin)
 *             if subproblem == -1: continue
 *             res = min(res, 1 + subproblem)
 * 
 *         # 记入备忘录
 *         memo[n] = res if res != float('INF') else -1
 *         return memo[n]
 * 
 *     return dp(amount)
 * ```
 */

function coinChange(coins, amount) {
  function db(coins, amount) {
    
  }
}