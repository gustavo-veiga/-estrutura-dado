class LinkedNode {
    constructor (value) {
        this.value = value
        this.nextNode = null
    }
}

class LinkedList {
    constructor (props) {
        this.initialNode = null
    }

    hasOnlyElement () {
        if (this.isEmpty()) {
            return false
        }

        return this.initialNode.nextNode == this.initialNode
    }

    showList () {
        if (this.isEmpty()) {
            return
        }

        let node = this.initialNode
        while (node.nextNode !== this.initialNode) {
            console.log(`Player: ${node.value}`)

            node = node.nextNode
        }
    }
    
    isEmpty () {
        return this.initialNode == null
    }

    push (value) {
        const node = new LinkedNode(value)

        if (this.isEmpty()) {
            node.nextNode = node
            this.initialNode = node
            return node
        }

        const currentNode = new LinkedNode(value)
        currentNode.nextNode = this.initialNode.nextNode
        this.initialNode.nextNode = currentNode

        return currentNode
    }

    getLastElement () {
        let node = this.initialNode

        while (node.nextNode != this.initialNode) {
            node = node.nextNode
        }

        return node
    }

    removeNode (nodeToRemove) {
        if (this.isEmpty()) {
            return null
        }

        console.log('Como esta´a lista?')
        this.showList()

        console.log(`Removendo o player ${nodeToRemove.value}`)

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

        console.log('Como está a lista depois?')
        this.showList()

        console.log(`found`)
        console.log(found)

        return found
    }

    searchNodeByValue (value) {
        if (this.isEmpty()) {
            return null
        }

        let node = this.initialNode
        let found = null
        while (true) {
            if (node.value === value) {
                found = node
                break
            }

            // cheguei no início, percorri a lista toda
            if (node.nextNode == this.initialNode) {
                break
            }

            node = node.nextNode
        }

        return found
    }
}

module.exports = {
    LinkedList,
    LinkedNode
}
