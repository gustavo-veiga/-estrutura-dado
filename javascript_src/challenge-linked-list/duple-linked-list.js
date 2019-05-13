class DupleLinkedNode {
    constructor (props) {
        this.player = props.player
        this.nextPlayer = null
        this.previusPlayer = null
    }
}

class DupleLinkedList {
    constructor (props) {
        this.initialNode = null
    }

    isEmpty () {}

    lenght () {}

    pushFront () {}

    removeNode (nickname) {}

    searchNodeByNickname (nickname) {}
}

export default {
    DupleLinkedList,
    DupleLinkedNode
}