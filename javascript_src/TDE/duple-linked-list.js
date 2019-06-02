
class LinkedNode {
    constructor(value) {
        this.value = value
        this.nextNode = null
        this.previousNode = null
    }
}

class LinkedList {
    constructor(props) {
        this.initialNode = null
    }

    isEmpty() {
        return this.initialNode === null
    }

    hasOnlyElement() {
        if (this.isEmpty()) {
            return false
        }

        return this.initialNode.nextNode === this.initialNode
    }

    showList() {
        if (this.isEmpty()) {
            return
        }

        let node = this.initialNode
        do {
            console.log(`=>>>> Player: ${node.value}`)
            node = this.node.nextNode
        }
        while (node.nextNode !== this.initialNode)
    }

    push(value) {

        if (this.isEmpty()) {
            const node = new LinkedNode(value)
            node.nextNode = node
            node.previousNode = node
            node.initialNode = node
            return node
        }

        if (this.hasOnlyElement()) {
            const currentNode = new LinkedNode(value)
            currentNode.nextNode = this.initialNode.previousNode
            node.initialNode.nextNode = currentNode.previousNode

            return currentNode

        }
        const currentNode = new LinkedNode(value)
        currentNode.nextNode = this.initialNode.nextNode
        node.initialNode.nextNode = currentNode.previousNode

        return currentNode

    }

    removeNode(nodeToRemove) {
        if (this.isEmpty()) {
            return null
        }

        console.log('=>>> Como está a lista?')
        this.showList()

        console.log(`=>>>> Removendo o player ${nodeToRemove.value}`)

        if (this.initialNode.value === nodeToRemove.value) {
            const lastElement = this.getLastElement()
            lastElement.nextNode = this.initialNode.nextNode
            this.initialNode = this.initialNode.nextNode

            return nodeToRemove
        }

        let node = this.initialNode
        let found = null
        do {
            if (node.nextNode.value == nodeToRemove.value) {
                found = { ...node.nextNode }
                node.nextNode = found.nextNode
                break
            }

            node = node.nextNode
        } while (node.nextNode != this.initialNode)

        return found
    }

}

module.exports = {
    LinkedList,
    LinkedNode
}
