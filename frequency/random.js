/**
 * 随机算法之水塘抽样算法
 *
 * 给你一个未知长度的链表，请你设计一个算法，只能遍历一次，随机地返回链表中的一个节点。
 * 随机是均匀随机（uniform random），也就是说，如果有n个元素，每个元素被选中的概率都是1/n，不可以有统计意义上的偏差。
 *
 * 结论：当你遇到第i个元素时，应该有1/i的概率选择该元素，1 - 1/i的概率保持原有的选择。
 */
const List = require('../data_structure/list');
const list = List.from([1,2,3,4,5,6,7,8,9,10]);

/**
 * 返回链表中 “一个” 随机节点的值
 * 
 * 当遇到第i个元素时，应该有1/i的概率选择该元素，1 - 1/i的概率保持原有的选择
 */
function getRandom(list) {
    let node = list;
    let index = 1, res = 0;

    // 遍历链表
    while(node) {
        // 生成一个 [0, i) 之间的整数
        const random = parseInt(Math.random() * index);

        // 这个整数等于 0 的概率就是 1/i
        if (random < 1) res = node.data;

        node = node.next;
        index++;
    }

    return res;
}

console.log('返回链表中一个随机节点的值: ', getRandom(list));


/** 
 * 返回链表中 “K个” 随机节点的值
 * 
 * 当遇到第i个元素时，在第i个元素处以k/i的概率选择该元素，以1 - k/i的概率保持原有选择
 */
function getKRandom(list, k) {
    let res = [];
    let node = list;

    for (let i = 0; i < k && node; i++) {
        res[i] = node.data;
        node = node.next;
    }

    // 记录链表k后面节点序号
    let index = k;

    // 遍历链表k后面的节点
    while(node) {
        // 生成一个 [0, i) 之间的整数
        let random = parseInt(Math.random() * (index + 1));

        // 这个整数小于 k 的概率就是 k/i
        if (random < k) res[random] = node.data;

        node = node.next;
        index++;
    }
    return res;
}

console.log('返回链表中K个随机节点的值: ', getKRandom(list, 4));
