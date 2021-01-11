/**
 * 数组扁平化
 */

// 方法一：递归遍历数组，并进行拼接
function flatten1(ary) {
    let temp = [], i = 0, len = ary.length;

    while(i < len) {
        if (Array.isArray(ary[i])) {
            temp = temp.concat(...flatten1(ary[i]));
        } else {
            temp.push(ary[i]);
        }
        i++;
    }

    return temp;
}

console.log('result1: ', flatten1([1,2, [3,4, [5,6]]]));


// 方法二：对方法一的优化，借助reduce代替while处理循环
function flatten2(ary) {
    return ary.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
    }, []);
}

console.log('result2: ', flatten2([11,22, [33,44, [55,66]]]));


// 方法三：转化为字符串，返回的数组项为字符串
function flatten3(ary) {
    /* toString -> "2,3,7,8,3,2" */
    return ary.toString().split(',');
}

console.log('result3: ', flatten3([2,3, [7,8, [3,2]]]));
