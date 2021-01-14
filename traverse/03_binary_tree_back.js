/**
 * 二叉树中序遍历
 * 
 * 遍历顺序：左 -> 右 -> 根
 * 应用场景：后续遍历的特点是在执行操作时，肯定已经遍历过该节点的左右子节点，适用于进行破坏性操作，比如删除所有节点，比如判断树中是否存在相同子树
 * 
 * @link https://charlesliuyx.github.io/2018/10/22/%E3%80%90%E7%9B%B4%E8%A7%82%E7%AE%97%E6%B3%95%E3%80%91%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C/Post-Order.png
 */

// 递归算法：拆分子任务
function postorderTraversal1(node) {
    if (!node) return;
    postorderTraversal1(node.left);
    postorderTraversal1(node.right);
    console.log(node.data);
}

// 迭代算法：利用栈维护节点的访问顺序
/**
 * 1.访问当前节点，如果当前节点有左孩子，则把它的左孩子都入栈，移动当前节点到左孩子，重复第一步直到当前节点没有左孩子
 * 2.当当前节点没有左孩子时，栈顶节点出栈，加入结果数组
 * 3.当前节点指向栈顶节点的右节点
 */
function postorderTraversal2(node) {
    if (!node) return;

    const stack = [{ node, visited: false }]; // 根节点入栈

    while (stack.length) {
        let { node: temp, visited } = stack.pop(); // 查看栈顶元素
        
        if (!visited) {
            // 如果未查看过，则更改为已查看状态，并重新入栈
            stack.push({ node: temp, visited: true });
            // 并把左右节点状态设置为未查看，入栈
            if (temp.right) stack.push({ node: temp.right, visited: false });
            if (temp.left) stack.push({ node: temp.left, visited: false });
        } else {
            // 如果已查看，则可以直接完成数据操作
            console.log(temp.data);
        }
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

postorderTraversal1(tree.root);
console.log('\n');
postorderTraversal2(tree.root);
