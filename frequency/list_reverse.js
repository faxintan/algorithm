/**
 * 单向链表翻转
 */

function reverse(list) {
    let current = list;
    let before = null;

    while(current) {
        let after = current.next;
        current.next = before;
        before = current;
        current = after;
    }

    return before;
}

function traverse(node) {
    if (!node) return;
    console.log(node.data); // 前序遍历
    traverse(node.next);
}

function testReverse(arr) {
    const List = require('../data_structure/list');
    const rList = reverse(List.from(arr));

    traverse(rList); // 前序遍历
}

testReverse([1, 2, 3, 4, 5, 6, 7, 8]); // 执行测试

module.exports = reverse;
