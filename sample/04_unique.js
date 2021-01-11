/**
 * 数组去重
 */

// 方法一：借助ES6的Set进行去重
function unique1(arr) {
    return [...new Set(arr)];
}

console.log('result1: ', unique1([1,2,2,2]));

// 方法二：对象Key唯一，空间换时间
function unique2(arr) {
    let i = 0, len = arr.length, temp = [], obj = {};
    
    while(i < len) {
        let item = arr[i];
        if (!obj[item]) {
            obj[item] = true; // 下次相同值无法进入该逻辑
            temp.push(item);
        }
        i++;
    }

    return temp;
}

console.log('result2: ', unique2([1,2,3,4,3,2,1]));
