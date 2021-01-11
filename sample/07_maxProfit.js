/**
 * 数组中最大差值
 * 
 * 数组中两个元素相减，求最大的值会是多少？
 */

function getMaxProfit(ary) {
    return Math.max.apply(null, ary) - Math.min.apply(null, ary);
}

console.log('result: ', getMaxProfit([1,3,5,6,7,20]));
