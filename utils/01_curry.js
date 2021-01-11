/**
 * 柯里化函数
 * 
 * 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。 
 * 既可以一次性地调用 curry 函数，也可以每次只传一个参数分多次调用。
 */

function curry(...args) {
    const [fn, ...others] = args;

    if (fn.length <= others.length) return fn(...others);
    
    return function(...args2) {
        curry(fn, ...others, ...args2);
    }
}

function testLog(a, b, c) {
    console.log(a, b, c);
    return c;
}

testLog2 = curry(testLog, 1, 2);
console.log('result: ', testLog2(10) === 10);
