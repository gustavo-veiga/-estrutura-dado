const readline = require('readline-sync')

function Stack() {
    this.lista = new Array(10) // Valor 10 deve ser trocado por input
    this.topo = -1

    //Metodos da pilha
    this.add = (value) => {

        if (this.isFull()) {
            console.error("Nao foi o site, mas deu Stack Overflow ;)")
        }

       return this.lista[++this.topo] = value
    }

    this.remove = () => {
        if (this.isEmpty()) {
            console.error("Meio dificil remover algo do nada, não acha ?")
            return undefined
        }
        return this.lista[--this.topo]
    }

    this.isEmpty = () => {
        if (this.topo == -1) {
            return true
        }
        return false
    }

    this.isFull = () => {
        if (this.topo >= this.lista.length - 1) {
            return true
        }
        return false
    }

    this.sizeOfStack = () => {
        if (this.isEmpty()) {
            return 0
        }
        return this.topo
    }

    this.topLook = () => {
        if (this.isEmpty()) {
            return console.error("Ja olhou pro nada ? Ta olhando agora .....")
        }
        return console.log("O topo e: " + this.lista[this.topo])
    }
}

let p = new Stack()
let condition = true

while (condition) {


    let choice = readline.question(
        `   Selecione um dos itens:

            1 --> Empilhar item
            2 --> Remover item
            3 --> Dar uma espiada no topo
            4 --> Qual o tamanho da pilha ?
            5 --> Essa pilha ai, ta vazia ?
            6 --> Essa pilha ai, ta cheia ?
            7 --> SAIR
        
        `)

    if (choice == '1') {
        let value = readline.question("Inserir numero: ")
        p.add(value)
    }

    if (choice == '2') {
        console.log(p.remove())
    }

    if (choice == '3') {
        p.topLook()
    }

    if (choice == '4') {
        console.log(p.sizeOfStack())
    }

    if (choice == '5') {
        console.log(p.isEmpty())
    }

    if (choice == '6') {
        console.log(p.isFull())
    }

    if (choice == '7') {
        condition = false
    }

}