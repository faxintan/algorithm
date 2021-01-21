/**
 * 有序 数组/链表 去重
 * 1. 双指针原地修改
 * 2. 尾部删除重复元素
 * 3. 不使用额外数组空间，空间复杂度 O(1)
 * 
 * @question https://mmbiz.qpic.cn/mmbiz_png/map09icNxZ4kjKDY327Vjgh9xjMKhdRwkpMc8yECrN67efS23St1iabEyH68FCsos3RyrgiaNwfMia6OqqzBxWDNBg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
 */

/**
 * 数组去重
 * 
 * @link https://mmbiz.qpic.cn/mmbiz_gif/map09icNxZ4kjKDY327Vjgh9xjMKhdRwkNrHlatFV4e3gVBNhQz8w4AdWzJQjZbiahEGcq8Bua5vam4ab6TY5OnA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1
 */
function arrayDuplicateRemoval(arr) {
    let slow = 0;
    let fast = 1;

    if (!arr || !arr.length) return [];

    while(fast < arr.length) {
        if (arr[fast] !== arr[slow]) {
            slow++;
            arr[slow]= arr[fast];
        }
        fast++;
    }

    arr.length = slow + 1;
    return arr;
}

console.log('result1: ', arrayDuplicateRemoval([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/**
 * 链表去重
 * 
 * @link https://mmbiz.qpic.cn/mmbiz_gif/map09icNxZ4kjKDY327Vjgh9xjMKhdRwkCU5OeeFaodzyERZwzVwAAU8DhJpcZDK3uddUsRyBibBG5ics8Wm0Vsyw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1
 */
function listDuplicateRemoval(list) {
    if (!list || !list.next) return [];
    
    let slow = list;
    let fast = list.next;

    while(fast) {
        if (fast.data != slow.data) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }

    return list;
}
function testList() {
    const result = [];
    const list = require('../data_structure/list').from([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

    const deWeight = listDuplicateRemoval(list);

    function traverse(node) {
        if (!node) return;
        result.push(node.data);
        traverse(node.next);
    }
    
    traverse(deWeight);
    return result;
}

console.log('result2: ', testList());

