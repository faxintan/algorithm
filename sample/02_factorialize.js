/**
 * 阶乘
 * 
 * 阶乘函数（符号：!）的意思是把逐一减小的自然数序列相乘。例如：4! = 4 × 3 × 2 × 1 = 24;
 */

// 方法一：递归，由于需要同时保存成千上百个调用帧，非常耗费内存，且很容易发生“栈溢出”错误
/**
 * 递归主要是把大的问题拆分成多个小问题进行处理，
 * 使用递归时需要保证递归结束的条件，否则容易进入
 * 死循环，栈溢出等问题
 */
function factorialize1(num) {
    if (typeof num === 'number' && num % 1 === 0) {
        if (num === 1) return num;
        return num * factorialize1(num - 1); // 递归调用
    } else {
        throw new Error('参数必须为整数');
    }
}

console.log('result1: ', factorialize1(4));

// 方法二：为了避免内销消耗，可以使用循环方式进行
/**
 * 通过循环模拟递归的处理，循环除了处理好初始化条件外，
 * 对循环条件的变更也非常重要
 */
function factorialize2(num) {
    if (typeof num === 'number' && num % 1 === 0) {
        if (num === 1) return 1;

        let total = num;
        
        while (num > 1) {
            total = total * (--num);
        }

        return total;
    } else {
        throw new Error('参数必须为整数');
    }
}

console.log('result2: ', factorialize2(4));
