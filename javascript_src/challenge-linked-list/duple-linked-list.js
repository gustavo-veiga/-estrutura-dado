/* Significado das cartas
 * 2 – Pula o próximo jogador e passa a vez para o seguinte.
 * 3 – Elimina o jogador atual.
 * 5 – Elimina o terceiro jogador contado a partir do jogador atual.
 * 7 – Elimina o jogador da rodada anterior (o jogador que tirou a carta antes).
*/

class DupleLinkedNode {
    constructor (value) {
        this.value = value
        this.nextNode = null
        this.previusNode = null
    }
}

class DupleLinkedList {
    constructor (props) {
        this.initialNode = null
    }
    
    isEmpty () {
        return this.initialNode == null
    }

    // Esse length só funciona no contexto da lista simplesmente encadeada...
    // Nao precisamos disso
    // lenght () {
    //     let aux = 0
    //     let node = this.initialNode
    //     while (node !== null) {
    //         aux++
    //         node = node.nextNode
    //     }

    //     return aux
    // }

    pushFront (value) {
        const node = new DupleLinkedNode(value)

        if (this.isEmpty()) {
            node.nextNode = node
            node.previusNode = node
            this.initialNode = node

            return node
        }

        // Inserir o elemento no início da fila

        // const currentNode = new DupleLinkedNode(value)
        // currentNode.nextNode = this.initialNode.previusNode
        // currentNode.previusNode = this.initialNode.nextNode
        
        // return currentNode
        
        const initialNode = this.initialNode
        node.nextNode = initialNode.nextNode
        initialNode.previusNode = node
        this.initialNode = node

        return node
    }

    removeNode (value) {
        if (this.isEmpty()) {
            return null
        }

        const nodeFounded = this.searchNodeByValue(value)

        if (!nodeFounded) {
            console.log(`Não encontramos alguem para o valor ${value}`)
            return null
        }

        // Como é uma lista duplamente encadeada, a cada inserção, previus e next são populados
        // Portanto, testar apenas uma chave já é suficiente
        // A condição abaixo diz: há apenas um elemento
        if (nodeFounded.nextNode.value === nodeFounded.value) {
            this.initialNode = null
            return nodeFounded
        }

        const previusNode = nodeFounded.previusNode
        const nextNode = nodeFounded.nextNode
        previusNode.nextNode = nextNode
        return nodeFounded
    }

    searchNodeByValue (value) {
        if (this.isEmpty()) {
            return null
        }

        let node = this.initialNode
        let found = null
        while (node != null) {
            if (node.value === value) {
                found = node
            }

            node = node.nextPlayer
        }

        return found // Achamos o safado e retornamo para um lugar feliz
    }
}

module.exports = {
    DupleLinkedList,
    DupleLinkedNode
}
