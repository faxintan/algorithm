/**
 * 判断是否为回文
 * 
 * 如果将一个文本翻转过来，能和原文本完全相等，那么就可以称之为“回文”
 */

// 方法一： 简单循环比较
function isPalindrome1(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }

  return true;
}

console.log('result: ', isPalindrome1('tssssst'));


// 方法二：通过其它函数把字符串倒序后进行比较
function isPalindrome2(str) {
  let palindrome = str.split('').reverse().join('');
  return palindrome === str;
}

// console.log('result: ', isPalindrome2('teset'));
