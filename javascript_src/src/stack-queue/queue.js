const readline = require('readline-sync')

function Queue() {
    this.list = new Array(10) //Trocar para input do usuario 
    this.first = 0
    this.ultimo = 0
    this.total = 0

    //Elem sera o elemento a ser inserido
    this.add = (elem) => {
        if( this.isFull() ) {
           return console.error("Fila cheia!")
        }

        console.log("ta fora do if adds")
        this.list[this.ultimo] = elem
        this.ultimo = (this.ultimo + 1) % this.list.length
        this.total++
    }

    this.remove= () => {
        if( this.isEmpty() ) {
           return console.error("Fila vazia")
        }
        
        let elemento = this.list[this.first]
        this.first = (this.first + 1) % this.list.length
        this.total--

        return elemento
    }

    this.isEmpty = () => {
        return this.total == 0
    }

    this.isFull = () => {
        return this.total == this.list.length
    }
}

let f = new Queue()
let condition = true

while (condition) {


    let choice = readline.question(
        `   Selecione um dos itens:

            1 --> Adicionar item
            2 --> Remover item
            3 --> Essa Fila ai, ta vazia ?
            4 --> Essa Fila ai, ta cheia ?
            5 --> SAIR
        
        `)

    if (choice == '1') {
        let value = readline.question("Inserir numero: ")
        f.add(value)
    }

    if (choice == '2') {
        console.log(f.remove())
    }

    if (choice == '3') {
        console.log(f.isEmpty())
    }

    if (choice == '4') {
        console.log(f.isFull())
    }

    if (choice == '5') {
        condition = false
    }

}
