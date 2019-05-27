const readline = require('readline-sync')
const { LinkedList } = require('./duple-linked-list')

/**
 * @method getRandomNumber
 * @return {Number} can be 1, 3, 9 or 12
 *  1 – Pula o próximo jogador e passa a vez para o seguinte.
    3 – Elimina o terceiro jogador contado a partir do jogador atual.
    9 – Elimina o jogador anterior na roda.
    12 – Inverte o sentido do jogo.
 */

const getRandomNumber = () => {
    let randomValue = (Math.floor(Math.random() * (0 - 5 + 1) + 5))

    if (randomValue == 1) {
        return 1
    }

    else if (randomValue == 2) {
        return 3
    }

    else if (randomValue == 3) {
        return 9
    }

    else if (randomValue == 4) {
        return 12
    }

}

const main = () => {
    console.log('=> Começando desafio...')

    console.log('=> Inicializando a lista')
    const linkedList = new LinkedList()

    console.log('=> Insira a lista de players...\n')

    while (true) {
        let players = []

        players = readline.question(`Digite o nome do player ${indice}: `)
    }
}