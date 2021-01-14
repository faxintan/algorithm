/**
 * 二叉树深度优先遍历（前/中/后序遍历）
 * 
 * 遍历顺序：纵向，探底到叶子节点
 * 应用场景：当每个节点的子节点非常多（非常胖），使用深度优先遍历节省空间（访问顺序和入栈顺序相关，想当于先序遍历），查找最长路径，回溯算法
 * 
 * @link https://charlesliuyx.github.io/2018/10/22/%E3%80%90%E7%9B%B4%E8%A7%82%E7%AE%97%E6%B3%95%E3%80%91%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C/Deep-First.png
 */

// 递归算法：拆分子任务
function depthOrderTraversal(node) {
    if (!node) return console.log('Binary Tree is empty!');

    const stack = [node];

    while (stack.length) {
        const temp = stack.pop();
        console.log(temp.data);

        // 栈为先进后出数据结构，先入栈右节点，则下一轮循环先访问左节点
        if (temp.right) stack.push(temp.right); // 先入栈右节点
        if (temp.left) stack.push(temp.left); // 后入栈左节点
    }
}

const BinaryTree = require('./data/tree');
const tree = new BinaryTree();

tree.insert(8);
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(9);
tree.insert(10);
tree.insert(11);
tree.insert(12);
tree.insert(13);
tree.insert(14);
tree.insert(15);

depthOrderTraversal(tree.root);
