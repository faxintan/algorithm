/**
 * 二叉树前序遍历
 * 
 * 遍历顺序：根 -> 左 -> 右
 * 应用场景：想在节点上直接执行操作（或输出结果）使用先序
 * 
 * @link https://charlesliuyx.github.io/2018/10/22/%E3%80%90%E7%9B%B4%E8%A7%82%E7%AE%97%E6%B3%95%E3%80%91%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C/Pre-Order.png
 */

// 递归算法：拆分子任务
function preorderTraversal1(node) {
    if (!node) return;
    console.log(node.data);
    preorderTraversal1(node.left);
    preorderTraversal1(node.right);
}

// 迭代算法：利用栈维护节点的访问顺序
/**
 * 先处理根节点，根据访问顺序根 ➜ 左 ➜ 右，先入栈的后访问，
 * 为了保持访问顺序（先入后出），先把右孩子入栈，再入栈左孩子
 */
function preorderTraversal2(node) {
    if (!node) return console.log('binary tree is empty!');

    const stack = [node]; // 根节点入栈

    while(stack.length) {
        const temp = stack.pop(); // 访问根节点
        console.log(temp.data); // 直接进行操作

        if (temp.right) stack.push(temp.right); // 先入栈右节点
        if (temp.left) stack.push(temp.left); // 后入栈左节点，这样下一轮循环先访问左节点，维护了访问顺序
    }
}



const BinaryTree = require('./data/tree');
const tree = new BinaryTree();

tree.randomInsert(1);
tree.randomInsert(2);
tree.randomInsert(3);
tree.randomInsert(4);
tree.randomInsert(5);
tree.randomInsert(6);
tree.randomInsert(7);
tree.randomInsert(8);
tree.randomInsert(9);
tree.randomInsert(10);
tree.randomInsert(11);
tree.randomInsert(12);
tree.randomInsert(13);
tree.randomInsert(14);
tree.randomInsert(15);

preorderTraversal1(tree.root);
console.log('\n');
preorderTraversal2(tree.root);
