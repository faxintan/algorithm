/**
 * 组合函数
 * 
 * 多个函数组合之后返回了一个新函数
 * “左倾” - 函数从右向左运行，前面函数执行结果为后面函数的入参
 */
function compose(...fns) {
    return function(...args) {
        return fns.reduceRight(
            (acc, cur) => [cur.apply(null, acc)],
            args,
        )[0];
    }
}

function test1(a) {
    return a + 1;
}

function test2(a) {
    return a * 2;
}

const test = compose(test2, test1);
console.log('result: ', test(9) === 20);
