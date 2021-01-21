class BTreeNode {
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
        const node = new BTreeNode(data);

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
        const node = new BTreeNode(data);

        if (!this.root) return this.root = node;

        function insert(root, node) {
            if (!root.left) return root.left = node;
            if (!root.right) return root.right = node;

            insert(Math.random() < 0.5 ? root.left : root.right, node);
        }
        
        insert(this.root, node);
    }
}

module.exports = BinaryTree;
