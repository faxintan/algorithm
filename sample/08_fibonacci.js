/**
 * 斐波纳契数列
 * 
 * 斐波纳契数列特点是，它的下一项是上两项的和，如: 0, 1, 1, 2, 3, 5, 8, ...
 */

function fibonacci1(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}

console.log('result1: ', fibonacci1(5));
