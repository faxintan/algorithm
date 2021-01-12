/**
 * 二叉树前序遍历
 * 
 * 遍历顺序：根 -> 左 -> 右
 * 应用场景：想在节点上直接执行操作（或输出结果）使用先序
 */

// 递归算法：拆分子任务
function preorderTraversal(node) {
    node && console.log(node.data);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
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

preorderTraversal(tree.root);
