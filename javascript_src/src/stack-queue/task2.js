//Captiura a escrita do usuario
const readlide = require('readline-sync')

function Stack() {
    this.lista = new Array(10) // Trocar por imput do usuario
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
}

function Queue() {
    this.list = new Array(10) //Trocar por input do usuario
    this.first = 0
    this.ultimo = 0
    this.total = 0

    //Elem sera o elemento a ser inserido
    this.add = (elem) => {
        if (this.isFull()) {
            return console.error("Fila cheia!")
        }
        this.list[this.ultimo] = elem
        this.ultimo = (this.ultimo + 1) % this.list.length
        this.total++
    }

    this.remove = () => {
        if (this.isEmpty()) {
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

//Instancia das estruturas
let f = new Queue()
let p = new Stack()

function generateRandomNumbers(size, min, max) {

    for (let i = 0; i <= size -1; i++) {

        p.add(defineList(min, max))
        f.add(defineList(min, max))

        function defineList(start, end) {
            let min = Math.ceil(end)
            let max = Math.floor(start)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }
}

// Guardar o tamanho das estruturas
let size = readlide.question("Qual o tamanho da Pilha e fila que voce quer ? ")

//Variaveis para gerar os valores dos numeros randomicos
let min = readlide.question("Defina um valor de start (Para os numeros randomicos): ")
let max = readlide.question("Defina um valor de end (Para os numeros randomicos): ")
    generateRandomNumbers(size, min, max)

//Lista que ira receber os novos valores da pilha e fila

let listaLinear = []

let tam = (size * 2)

for (let i = 0; i <= tam - 1; i+=2) {
    listaLinear[i] = p.remove()
}

for (let i = 1; i <= tam - 1; i+=2) {
    listaLinear[i] = f.remove()
}

console.log(listaLinear)
