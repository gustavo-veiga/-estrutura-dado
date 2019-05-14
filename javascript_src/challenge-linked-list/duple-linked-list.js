/* Significado das cartas
 * 2 – Pula o próximo jogador e passa a vez para o seguinte.
 * 3 – Elimina o jogador atual.
 * 5 – Elimina o terceiro jogador contado a partir do jogador atual.
 * 7 – Elimina o jogador da rodada anterior (o jogador que tirou a carta antes).
*/
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

    /* Entao meu caro gafanhoto, super acho valido criarmos uma factory para os nos
     * eh que nao tivemos tempo de trocar uma ideia, entao to comentando esse codigo crocante
     * e vc ve se da para aproveitar alguam merda disso aqui
    

    this.Node = (value) => { // Minha visao de factory of node
        return {
            value,
            next: null,
            previus: null
        }
    }
    */
    
    isEmpty () {
        if (this.initialNode == null) {
            return true
        }
        return false
    }

    lenght () {}

    pushFront () {}

    removeNode (nickname) {
        if (this.isEmpty()) {
            return null
        }

        // Caso o player a ser excluido seja o primeiro,
        //passamos o ponteiro do antecessor para o proximo do proximo
        if (this.player === nickname) { 
            this.previusPlayer = this.nextPlayer
            lenght--
            return console.log(`O player ${nickname} foi para um lugar melhor :)`)
        }

        let targetFromHell = searchNodeByNickname(nickname)
            this.player = targetFromHell
            this.previusPlayer = this.nextPlayer // Fazendo a treta do antecessor pegar o prox do prox

    }

    searchNodeByNickname (nickname) {
        if (this.isEmpty()) {
            return null
        }

        let node = this.initialNode
        let checker = 0
        while (checker < lenght && node.next) {
            node = node.next
            checker++
        }

        return node // Achamos o safado e retornamo para um lugar feliz
    }
}

export default {
    DupleLinkedList,
    DupleLinkedNode
}