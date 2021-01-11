/**
 * 最大公约数 (最大公因数)
 * 
 * 指能够整除多个正整数的最大正整数。同理可得最小公倍数
 */

function greatestCommonDivisor1(a, b) {
    if (a < 0 || b < 0) throw new Error('参数只能为正数');
    if (a < 2 || b < 2) return 1;

    let min = a, max = b, arymin = [];

    if(a > b) {
		min = b;
		max = a;
    }
    
    for (let i = 1; i <= min; i++) {
        if (min % i === 0) {
            arymin.push(i);
        }
    }

    arymin.reverse();

    for (let j = 0, len = arymin.length; j < len; j++) {
        if (max % arymin[j] === 0) {
            return arymin[j];
        }
    }
}

console.log('result1：', greatestCommonDivisor1(4,8));
