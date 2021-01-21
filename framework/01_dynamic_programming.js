/**
 * 动态规划算法
 * 
 * @应用场景 求最值，如求最长递增子序列，最小编辑距离等等
 * @核心原理 穷举，求最值就是要把所有可行的答案穷举出来，然后在其中找最值
 * @优化方式 穷举中存在大量「重叠子问题」，可通过「备忘录」或者「DP table」来优化穷举过程
 * @实现核心 问题可以千变万化，只有列出正确的「状态转移方程」才能正确地穷举
 * 
 * @状态转移方程 明确「状态」 -> 定义 dp 数组/函数的含义 -> 明确「选择」-> 明确 base case
 * 
 * @link https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484731&idx=1&sn=f1db6dee2c8e70c42240aead9fd224e6&chksm=9bd7fb33aca07225bee0b23a911c30295e0b90f393af75eca377caa4598ffb203549e1768336&scene=21#wechat_redirect
 *
 * @example
 * 
 * ```js
 * // 伪代码框架 (斐波那契数列)
 * function fib(list, target) {
 *   const map = {}; // 备忘录，优化重叠子问题
 * 
 *   function dp(map, n) {
 *      if (n === 1 || n === 2) return 1;           // base case，递归终止条件
 *      if (map[n]) return map[n];                  // 备忘录，记录计算过的结果，避免递归
 *      map[n] = dp(map, n - 1) + dp(map, n - 2);   // 状态转移方程
 *      return map[n];                              // 返回结果
 *   }
 * 
 *   return dp(map, n);
 * }
 * ```
 */

/**
 * 斐波那契数列
 * 
 * @param {*} index - 求值序号
 * @return 斐波那契数列在index位置的数值
 * 
 * 数列从第3项开始，每一项都等于前两项之和。如：
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377， 610...
 */
function fib(index) {
    if (index === 0) return 0;
    if (index === 1 || index === 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

function fibWithMemo(index) {
    if (index === 0) return 0;
    function dp(map, n) {
        if (n === 1 || n === 2) return 1;
        if (map[n]) return map[n];
        map[n] = dp(map, n - 1) + dp(map, n - 2);
        return map[n];
    }

    return dp({}, index);
}

console.log(fibWithMemo(0));
console.log(fibWithMemo(1));
console.log(fibWithMemo(2));
console.log(fibWithMemo(3));
console.log(fibWithMemo(4));
console.log(fibWithMemo(5));
console.log(fibWithMemo(6));
console.log(fibWithMemo(7));
console.log(fibWithMemo(8));
