/**
 * 判断是否为质数
 * 
 * 质数：只能被1和自己整除，且大于1的数
 * 合数：数大于1且因数多于两个 （大于1的质数的补集）
 * @ref https://v.qq.com/x/page/r300013zgo6.html
 */

function isPrimeNumber1(n) {
    if (n <= 1) return false; // 1 既不是质数 也不是合数
    if (n === 2) return true; // 最小的质数
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log('result1: ', isPrimeNumber1(10));
