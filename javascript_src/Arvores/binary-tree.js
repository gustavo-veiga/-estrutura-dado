
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

    binaryConstructor (value, currentNode = this.rootNode) {
        // Show the magic
        
        if (this.isEmpty()) {
            let newNode = new BinaryNode(value)
            this.rootNode = newNode
            return
        }

        if (value === currentNode.value) {
            if (currentNode.leftNode !== null ) {
                this.binaryConstructor(value, currentNode.leftNode)
            } else {
                let newNode = new BinaryNode(value)
                currentNode.leftNode = newNode
                return
            }
        } else {
            if (currentNode.rightNode !== null) {
                this.binaryConstructor(value, currentNode.rightNode)
            } else {
                let newNode = new BinaryNode(value)
                currentNode.rightNode = newNode
                return
            }
        }

    }

    jediWoodCutter (value) {
        if (this.isEmpty()) {
            return
        }

        if (this.rootNode.leftNode === null && this.rootNode.rightNode === null && this.rootNode.value === value) {
            this.rootNode = null
        }
        // See the magic happen
    }

    // Metodos de percurso
    preorderPrinting(Node = this.rootNode) {
        console.log(Node.value)

        if (Node.leftNode !== null) {
            this.preorderPrinting(Node.leftNode)
        }
        if (Node.rightNode !== null) {
            this.preorderPrinting(Node.rightNode)
        }
    }

    orderPrinting(Node = this.rootNode) {
        if (Node.leftNode !== null) {
            this.preorderPrinting(Node.leftNode)
        }
        if (Node.rightNode !== null) {
            this.preorderPrinting(Node.rightNode)
        }
        console.log(Node.value)
    }
}

module.exports = { 
    BinaryNode,
    BinaryTree
}