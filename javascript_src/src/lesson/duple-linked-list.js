class DoubleLinkedList {
    constructor(props) {
        this.initialNode = null;
    }

    isEmpty() {
        return this.initialNode === null;
    }

    hasOnlyElement() {
        return this.initialNode.nextNode === this.initialNode;
    }

    hasTwoElements() {
        return this.initialNode.nextNode.nextNode == this.initialNode;
    }

    showList() {
        if (!this.isEmpty()) {
            let node = this.initialNode;
            do {
                print(`=>>>> Player: ${node.value}`);
                print(`=>>>>> Proximo: ${node.nextNode.value}`);
                print(`=>>>>> Anterior: ${node.previousNode.value}`);
                print('')
                node = node.nextNode;
            } while (node !== this.initialNode);
        }
    }

    push(value) {
        if (this.isEmpty()) {
            const node = new NodeDuple(value);
            node.nextNode = node;
            node.previousNode = node;
            this.initialNode = node;
            return node
        }

        if (this.hasOnlyElement()) {
            const currentNode = new NodeDuple(value);
            this.initialNode.nextNode = currentNode;
            currentNode.previousNode = this.initialNode;
            currentNode.nextNode = this.initialNode;
            this.initialNode.previousNode = currentNode;
            return currentNode;
        }

        const currentNode = new NodeDuple(value);
        currentNode.nextNode = this.initialNode.nextNode;
        this.initialNode.nextNode.previousNode = currentNode;
        currentNode.previousNode = this.initialNode;
        this.initialNode.nextNode = currentNode;

        return currentNode;
    }

    removeNode(nodeToRemove) {
        if (this.isEmpty()) {
            return null
        }

        console.log(`=>>>> Removendo o player ${nodeToRemove.value}`);
        console.log('=>>> Como está a lista?');
        this.showList()

        if (this.hasTwoElements()) {
            console.log('=>>>> Remoção personalizada para lista com dois elementos');

            if (nodeToRemove.value === this.initialNode.value) {
                console.log('=>>>>> Remover elemento de início da fila, movendo ponteiro de início');
                const secondElement = this.initialNode.nextNode;
                secondElement.nextNode = secondElement;
                secondElement.previousNode = secondElement;
                this.initialNode = secondElement;
                return nodeToRemove;
            }

            this.initialNode.nextNode = this.initialNode;
            this.initialNode.previousNode = this.initialNode;
            return nodeToRemove;
        }

        if (nodeToRemove.value === this.initialNode.value) {
            console.log('Remoção personalizada para início da fila');
            const secondNode = this.initialNode.nextNode;
            const lastElement = this.initialNode.previousNode;
            secondNode.previousNode = lastElement;
            lastElement.nextNode = secondNode;
            this.initialNode = secondNode;
            return nodeToRemove;
        }

        const previousElement = nodeToRemove.previousNode;
        const nextElement = nodeToRemove.nextNode;

        previousElement.nextNode = nextElement;
        nextElement.previousNode = previousElement;
        nodeToRemove.nextNode = null;
        nodeToRemove.previousNode = null;
        return nodeToRemove;
    }
}
