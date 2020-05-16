const readline = require('readline-sync')

function Stack() {
    this.lista = new Array(20) // Valor 10 deve ser trocado por input
    this.topo = -1

    //Metodos padroes de uma pilha
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

    //Metodos para operacoes unarias e binarias na pilha

    this.DEC2 = () => {
        if(this.isEmpty()) {
            return console.error("A pilha esta vazia!")
        } 
        return this.lista[this.topo] -= 2 } 

    this.ADD3 = () => { 
        if(this.isEmpty()) {
            return console.error("A pilha esta vazia!")
        } 
        return this.lista[this.topo] += 3 }

    this.Soma = () => { // Soma e o mesmo do ADD das funcoes binarias
        if(this.isEmpty()) {
            return console.error("A pilha esta vazia!")
        } 
        this.newTopo = this.lista[this.topo]
            this.remove()
        return this.lista[this.topo] += this.newTopo
    }
    this.SUB = () => {
        if(this.isEmpty()) {
            return console.error("A pilha esta vazia!")
        } 
        this.newTopo = this.lista[this.topo]
            this.remove()
        return this.lista[this.topo] -= this.newTopo  
    }
    this.MYP = () => {
        if(this.isEmpty()) {
            return console.error("A pilha esta vazia!")
        } 
        this.newTopo = this.lista[this.topo]
            this.remove()
        return this.lista[this.topo] *= this.newTopo
    }
    this.DIV = () => {
        if(this.isEmpty()) {
            return console.error("A pilha esta vazia!")
        } 
        this.newTopo = this.lista[this.topo]
            this.remove()
        return this.lista[this.topo] /= this.newTopo
    }

}

let p = new Stack()
let condition = true

while (condition) {


    let choice = readline.question(
        `   Selecione um dos itens:

            1 --> Empilhar item.
            2 --> Remover item.
            3 --> Olhar o topo.
            4 --> Operacoes unarias.
            5 --> Operacoes binarias.
            6 --> SAIR
        
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

    if (choice == '4') { //Unarias (DEC2, ADD3)
        let conditionUna = true

        while (conditionUna == true) {
            let choice = readline.question(
             `  Selecione uma operacao Unaria:

                1 --> DEC2 (subtrai o valor 2 do elemento do topo)
                2 --> ADD3 (adiciona o valor 3 ao elemento do topo)
                3 --> Voltar ao menu principal!
             `)
             if ( choice == '1') {
                 p.DEC2()
             }
             if ( choice == '2') {
                p.ADD3()
            }
            if ( choice == '3') {
                conditionUna = false
            }
        }
    }

    if (choice == '5') { //Binarias (ADD, SUB, MPY, DIV = (X topo e Y abaixo topo))
        let conditionBin = true

        while (conditionBin == true) {
            let choice = readline.question(
             `  Selecione uma operacao Binaria (Y é o elemento no topo da pilha e X o elemento abaixo de Y):

                1 --> ADD (adição X+Y)
                2 --> SUB (subtração X-Y)
                3 --> MPY (multiplicação X*Y)
                4 --> DIV (divisão X/Y)
                5 --> Voltar ao menu principal.
             `)
             if ( choice == '1') {
                 console.log(p.Soma())
             }
             if ( choice == '2') {
                console.log(p.SUB())
            }
            if ( choice == '3') {
                console.log(p.MYP())
            }
            if ( choice == '4') {
                console.log(p.DIV())
            }
            if ( choice == '5') {
                conditionBin = false
            }
        }
    }

    //Saida do laco mais externo (Menu principal)
    if (choice == '6') {
        condition = false
    }

}