class Node {
    constructor(data, left, right) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);

        if (!this.root) return this.root = node;

        function insert(root, node) {
            if (root.data > node.data) {
                if (!root.left) return root.left = node;
                insert(root.left, node);
            } else if (root.data < node.data) {
                if (!root.right) return root.right = node;
                insert(root.right, node);
            } else {
                console.log(`${node.data} 节点已存在`);
                return false;
            }
        }
        
        insert(this.root, node);
    }

    randomInsert(data) {
        const node = new Node(data);

        if (!this.root) return this.root = node;

        function insert(root, node) {
            if (!root.left) return root.left = node;
            if (!root.right) return root.right = node;

            insert(Math.random() < 0.5 ? root.left : root.right, node);
        }
        
        insert(this.root, node);
    }
}

// const tree = new BinaryTree();

// tree.randomInsert(1);
// tree.randomInsert(2);
// tree.randomInsert(3);
// tree.randomInsert(4);
// tree.randomInsert(5);
// tree.randomInsert(6);
// tree.randomInsert(7);
// tree.randomInsert(8);
// tree.randomInsert(9);
// tree.randomInsert(10);
// tree.randomInsert(11);
// tree.randomInsert(12);
// tree.randomInsert(13);
// tree.randomInsert(14);
// tree.randomInsert(15);

// 排序二叉树
// tree.insert(8);
// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(23);
// tree.insert(71);
// tree.insert(6);
// tree.insert(7);
// tree.insert(9);
// tree.insert(12);
// tree.insert(11);
// tree.insert(19);
// tree.insert(118);
// tree.insert(14);
// tree.insert(150);

// function traversal(node) {
//     if (!node) return;
//     traversal(node.left);
//     console.log(node.data);
//     traversal(node.right);
// }

// traversal(tree.root);

module.exports = BinaryTree;
