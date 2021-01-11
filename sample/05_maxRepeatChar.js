/**
 * 字符串中重复最多的字符
 */

function maxRepeatNum(str) {
    let obj = {}, max = 0, char;

    str.split('').forEach((char) => {
        obj[char] = obj[char] ? obj[char] + 1 : 1;
    });

    Object.keys(obj).forEach((key) => {
        if (obj[key] > max) {
            max = obj[key];
            char = key;
        }
    });

    return { char, max };
}

console.log('result: ', maxRepeatNum('string,haha'));
