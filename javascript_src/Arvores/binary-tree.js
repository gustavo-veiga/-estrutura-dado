
class BinaryNode {
    constructor (value) {
        this.leftNode = null
        this.value = value
        this.rightNode = null
    }
}

class BinaryTree {
    constructor () {
        this.rootNode = null 
    }

    isEmpty() {
        return this.rootNode === null
    }

    binaryConstructor (value, currentNode) {
        // Show the magic
        let newNode = new BinaryNode(value)
        let currentNode = this.rootNode
        // Arvore vazia, o primeiro no vira raiz
        if (this.isEmpty()) {
            this.rootNode = newNode
        } else if (newNode.value < currentNode.value) {
            if (currentNode.leftNode === null) {
                currentNode.leftNode = newNode
            } else {
                this.binaryConstructor(value, currentNode.leftNode)
            }
        } else  {
            if (currentNode.rightNode === null) {
                currentNode.rightNode = newNode
            } else {
                this.binaryConstructor(value, currentNode.rightNode)
            }
        }
    }

    preorderPrinting (Node) {
        console.log(Node.value)

        if (Node.leftNode !== null) {
            this.preorderPrinting(Node.leftNode)
        }
        if (Node.rightNode !== null) {
            this.preorderPrinting(Node.rightNode)
        }
    }
}

module.exports = { 
    BinaryNode,
    BinaryTree
}