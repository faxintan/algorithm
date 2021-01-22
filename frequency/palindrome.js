/**
 * 回文判断
 * 
 * 回文串就是正着读和反着读都一样的字符串
 */

/**
 * 判断字符串是否为回文 - 从两边向内聚拢
 */
function isPalindromeString(text) {
    let left = 0;
    let right = text.length - 1;
    
    while(left < right) {
        if (text[left] !== text[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log('isPalindromeString: ', isPalindromeString('txxt'));

/**
 * 查找最长回文子串 - 从中心向两端扩展
 *
 * 1. 长度为奇数时存在一个中心点
 * 2. 长度为偶数时存在两个中心点
 * 
 * @link https://mmbiz.qpic.cn/mmbiz_png/map09icNxZ4lLwdm05DtOeOPia4eSQF3HJWKPuI6XXSumtytXXkvgQPwO1szjiaWicF84yMiaIwmFyRic4RmocZz3qvw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
 */
function getPalindrome(str, left, right) {
    while(
        left >= 0 && right < str.length // 防止索引越界[A, B)]
        && str[left] === str[right] // 判断是否为回文
    ) {
        // console.log('left: ', left, str[left]);
        // console.log('right: ', right, str[right]);
        left--; right++; // 从中心想两端扩展
    }

    return str.substr(left + 1, right - left - 1); // 返回指定中心的最长回文
}

function longestPalindrome(str) {
    let max = '';

    for(let i = 0; i < str.length; i++) {
        let str1 = getPalindrome(str, i, i);
        let str2 = getPalindrome(str, i, i + 1);

        max = max.length > str1.length ? max : str1;
        max = max.length > str2.length ? max : str2;
    }

    return max;
}

console.log('getPalindrome1: ', getPalindrome('txxt', 1));
console.log('getPalindrome2: ', getPalindrome('txxt', 1, 2));
console.log('longestPalindrome: ', longestPalindrome('txstsattxxt'));

/**
 * 判断回文单链表 - 借助二叉树后序遍历
 * 
 * @link https://mmbiz.qpic.cn/sz_mmbiz_gif/gibkIz0MVqdFIu7T79GYa24TTib9YP1dZicqkFgB2NwpsHXOdKu0XnwoVK7JeQ055fCQOKDJFEVjzvsfzibWAvIeLA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
 */
const List = require('../data_structure/list');

function isPalindromeList(list) {
    let left = list; // 记录头指针

    function traverse(right) {
        if (!right) return true;
        let result = traverse(right.next); // 递归遍历至尾指针
        result = result && (left.data === right.data); // 首尾节点对比
        left = left.next; // 向内聚拢
        return result; // 返回结果，如果有一次为false，则最终结果为false
    }

    return traverse(list);
}

console.log('isPalindromeList: ', isPalindromeList(List.from(['t', 'x', 's', 'x', 't'])));
