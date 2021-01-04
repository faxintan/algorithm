/**
 * 生成长度为n的随机字符串
 */

// 方法一：定义全字符列表，然后通过随机数抽取拼接
function randomString1(n) {
    let az = 'abcdefghijklmnopqrstuvwxyz';
    let chars = '0123456789' + az + az.toUpperCase();
    let randomStr = '';
    let i = 0;

    while (i < n) {
        randomStr += chars[Math.floor(Math.random() * chars.length)];
        i++;
    }

    return randomStr;
}

console.log('result1: ', randomString1(10));


// 方法二：随机码点，根据字符的ASCII码生成字符串
/* 
* 0  ~  9  <--> 48 ~ 57
* 65 ~ 90  <-->  A ~ Z
* 97 ~ 122 <-->  a ~ z
*/
function randomString2(n) {
    let str = '';

    function randomChar() {
        let num = Math.floor(Math.random() * 62); // 10 + 26 + 26
        if (num < 10) return num.toString();
        if (num < 36) return String.fromCharCode(num + 55);
        return String.fromCharCode(num + 61);
    }

    while (str.length < n) str += randomChar();

    return str;
}

console.log('result2: ', randomString2(20));


// 方法三：数字转换32进制字符，但是字符为全小写且长度有限
function randomString3(n) {
    return Math.random().toString(36)/* 0.fokajp05hco */.substr(2).substr(0, n);
}

console.log('result3: ', randomString3(25)); // 达不到指定长度
