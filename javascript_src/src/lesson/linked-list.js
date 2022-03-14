class LinkedList {
    constructor() {
        this.lenght = 0;
        this.ptStart = null;
    }

    // Element access
    find(index) {
        if (lenght == 0 || index >= lenght) {
            return undefined;
        }
        let node = this.ptStart;
        let checker = 0;
        while (checker < index && node.nextNode) {
            node = node.nextNode;
            checker++;
        }
        return node;
    }

    // Capacity
    isEmpty() {
        return lenght == 0;
    }

    // Modifiers
    pop(node) {
        if (isEmpty()) {
            return false;
        }
        if (node === this.ptStart) {
            this.ptStart = node.nextNode;
            return true;
        }
        let current = this.ptStart;
        while (current.next && current.next !== node) {
            current = current.next;
        }
        current.next = node.nextNode;
    }

    pushBack(value) {
        if (isEmpty()) {
            this.ptStart = new Node(value);
            lenght++;
            return this.ptStart;
        }
        let node = this.ptStart;
        while (node.nextNode) {
            node = node.nextNode;
        }
        node.nextNode = new Node(value);
        lenght++;
        return node.nextNode;
    }

    pushFront(value) {
        if (isEmpty()) {
            this.ptStart = Node(value);
            lenght++;
            return this.ptStart;
        }
        let nodeHere = Node(value);
        nodeHere.next = this.ptStart;
        this.ptStart = nodeHere
        lenght++;
        return nodeHere;
    }
}
