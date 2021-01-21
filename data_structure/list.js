class Node {
    constructor(data, next) {
        this.next = next;
        this.data = data;
    }
}

class List {
    constructor(arr) {
        this.head = List.from(arr);
    }

    static from(arr) {
        if (!Array.isArray(arr) || !arr.length) return null;

        let index = 0;
        let head = null;
        let current = null;

        while(index < arr.length) {
            const node = new Node(arr[index]);

            if (index === 0) {
                head = current = node
            } else {
                current.next = node;
                current = current.next;
            }

            index++;
        }

        return head;
    }
}

module.exports = List;
