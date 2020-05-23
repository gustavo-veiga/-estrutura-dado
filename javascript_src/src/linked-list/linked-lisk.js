function Linked() {
    /*  Porque usar function e nao classe, e arrow function ao inves de this
     * Misturar programacao orientada a objetos com programacao funcional acaba que o codigo
     * fica mais complexo e poluido, como javascript nao tem fortes raizes na OO utiulizar
     * o maximo de porgramacao funcional deixa o codigo mais limpo e de melhor leitura.
     * Mas em contrapartida tenho que fazer o retorno de todos os meus metodos ao final da funcao
     * para deixalos publicos.
     *
    */

    var ptInicio = null;
    var lenght = 0;

    // Factory of node
    const Node = (value) => {
        return {
            value,
            next: null
        }
    }

    const isEmpty = () => {
        if (lenght == 0) {
            return true
        }
        return false
    }

    const pushBack = (value) => { // Complexidade O(n)
        if (isEmpty()) {
            ptInicio = Node(value)
            lenght++
            return ptInicio
        }

        let node = ptInicio
        while (node.next) {
            node = node.next
        }

        node.next = Node(value)
        lenght++
        return node.next
    }

    const pushFront = (value) => {
        if (isEmpty()) {
            ptInicio = Node(value)
            lenght++
            return ptInicio
        }
 
        let nodeHere = Node(value)
        nodeHere.next = ptInicio
        ptInicio = nodeHere
        lenght++
        return nodeHere

    }

    const removeNode = (node) => {
        if (isEmpty()) {
            return null
        }

        if (node === ptInicio) {
            ptInicio = node.next
            return console.log('Primeiro item excluido!')
        }

        let current = ptInicio
        while (current.next && current.next !== node) {
            current = current.next
        }
        current.next = node.next
    }

    const findNode = (indice) => {
        if (lenght == 0 || indice >= lenght) {
            return null
        }

        let node = ptInicio
        let checker = 0
        while (checker < indice && node.next) {
            node = node.next
            checker++
        }

        return node
    }

    return {
        lenght: () => lenght,
        pushBack: (value) => pushBack(value),
        pushFront: (value) => pushFront(value),
        removeNode: (node) => removeNode(node),
        findNode: (indice) => findNode(indice),
        showList: () => console.log(ptInicio)
    }

}

const list = Linked()

list.pushBack(10)
list.pushFront(20)
list.pushBack(30)
list.pushFront(40)

// > 40 > 20 > 10 > 30 

console.log(list.lenght())
//list.pushBack(30)
//list.pushBack(40)

//console.log(list.lenght())
list.showList()

//let target = list.findNode(3)
//console.log(target)

//list.removeNode(target)
//list.showList()

