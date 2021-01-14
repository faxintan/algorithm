/**
 * 二叉树中序遍历
 * 
 * 遍历顺序：左 -> 根 -> 右
 * 应用场景：在二分搜索树中，中序遍历的顺序符合从小到大（或从大到小）顺序的，要输出排序好的结果使用中序
 * 
 * @link https://charlesliuyx.github.io/2018/10/22/%E3%80%90%E7%9B%B4%E8%A7%82%E7%AE%97%E6%B3%95%E3%80%91%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C/In-Order.png
 */

// 递归算法：拆分子任务
function inorderTraversal1(node) {
    if (!node) return;
    inorderTraversal1(node.left);
    console.log(node.data);
    inorderTraversal1(node.right);
}

// 迭代算法：利用栈维护节点的访问顺序
/**
 * 1. 访问当前节点，如果当前节点有左孩子，则把它的左孩子都入栈，移动当前节点到左孩子，重复第一步直到当前节点没有左孩子
 * 2. 当当前节点没有左孩子时，栈顶节点出栈，加入结果数组
 * 3. 当前节点指向栈顶节点的右节点
 */
function inorderTraversal2(node) {
    if (!node) return;
    
    let next = node; // 当前访问节点
    const stack = []; // 空栈

    while (next || stack.length) {
        
        // 把所有当前访问节点的左孩子都入栈
        while (next) {
            stack.push(next);
            next = next.left;
        }

        temp = stack.pop(); // 操作栈顶节点，如果是第一次运行到这步，那么这是整棵树的最左节点
        console.log(temp.data); // 操作数据

        if (temp.right) next = temp.right; // 将指针指向当前节点的右节点，下一个循环将查找右节点的最左节点
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

inorderTraversal1(tree.root);
console.log('\n');
inorderTraversal2(tree.root);
