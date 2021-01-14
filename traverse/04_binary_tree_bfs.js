/**
 * 二叉树广度优先遍历
 * 
 * 遍历顺序：层序，横向访问
 * 应用场景：当树的高度非常高（非常瘦），使用广度优先剑节省空间，如查找最小路径
 * 
 * @link https://charlesliuyx.github.io/2018/10/22/%E3%80%90%E7%9B%B4%E8%A7%82%E7%AE%97%E6%B3%95%E3%80%91%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C/Breadth-First.png
 */

// 广度遍历的核心思路就是使用队列，即先进先出 First-in First-out，
// 这里很关键的一点就是以层来作为入队和出队的判断条件,
// 并且因为按照层的顺序，是从左到右，所以遍历顺序（入队顺序）为左 ➜ 右

function levelOrderTraversal(node) {
    if (!node) return console.log('binary tree is empty!');

    const queue = [node];

    while(queue.length) {
        const temp = queue.shift();
        console.log(temp.data);
        
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
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

levelOrderTraversal(tree.root);
