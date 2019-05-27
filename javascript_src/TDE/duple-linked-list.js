
class LinkedNode {
    constructor(value) {
        this.value = value
        this.nextNode = null
        this.previous = null
    }
}

class LinkedList {
    constructor(props) {
        this.initialNode = null
    }

}

module.exports = {
    LinkedList,
    LinkedNode
}