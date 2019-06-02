const readline = require('readline-sync')
const { LinkedList } = require('./duple-linked-list')

/**
 * @method getRandomNumber
 * @return {Number} can be 1, 3, 9 or 12
 *  1 – Pula o próximo jogador e passa a vez para o seguinte.
    3 – Elimina o terceiro jogador contado a partir do jogador atual.
    9 – Elimina o jogador anterior na roda.
    12 – Inverte o sentido do jogo.
    0 - Jogador atual fica 3 rodadas sem jogar
    13 - 
 */

const getRandomNumber = () => {
    let randomValue = (Math.floor(Math.random() * (0 - 2 + 1) + 2))

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

    else if (randomValue == 5) {
        return 0
    }

    else if (randomValue == 6) {
        return 13
    }
    
}

const executeToOneNumber = (currentPlayer) => {
    console.log('=>> Pula o próximo jogador e passa a vez para o seguinte')
    return currentPlayer.nextNode.nextNode
}

const executeToThreeNumber = (list, currentPlayer) => {
    const playerToRemove = currentPlayer.nextNode.nextNode
    console.log('=>> Elimina o terceiro jogador contado a partir do jogador atual.')
    list.removeNode(playerToRemove)
    return currentPlayer.nextNode
}

const executeToNineNumber = (list, currentPlayer, lastPlayer) => {
    console.log('=>> Elimina o jogador da rodada anterior (o jogador que tirou a carta antes).')
    list.removeNode(lastPlayer)
    return currentPlayer.nextNode
}

const executeToTwelveNumber = () => {
    console.log('Inverte o sentido do jogo')
}

const executeToZeroNumber = (currentPlayer) => {
    console.log(`O jogador ${currentPlayer} ficara 3 rodadas sem poder jogar`)
}

const executeToThirteenNumber = () => {
    console.log('Escolha quantos jogadores deseja pular: ')
}


const main = () => {
    console.clear()
    console.log('=> Começando desafio...')

    console.log('=> Inicializando a lista')
    const linkedList = new LinkedList()

    console.log('=> Insira a lista de players...\n')

    let players = []
	let countOfPlayers = 0
	
	console.log("O jogo se inicia com no minimo 5 e no maximo 10 jogadores :)")
	
    for (let i = 0; i < 10; i++) {
		// TODO: Só aceitar valores de nomes válidos
        // TODO: Permitir nomes pré-definidos
		players[i] = readline.question(`Digite o nome do player ${i + 1}: `)
        
        // TODO: É quando o valor de i for 5, mostrar a mensagem: "Digite 0 para finalizar aqui"
		if ( players[i] === '0' && i >= 5) {
			break
		}
		else if (players[i] === '0' && i <= 5) {
			console.log("Ainda não cumprimos nossa meta, não é mesmo? ")
			i--
		}
	}

    // Carregando a lista duplamente encadeada
    players.forEach(player => {
        linkedList.push(player)
    })

    console.log('=> A lista foi populada com sucesso')
        // console.clear()
        // linkedList.showList()
    

console.log('=> Começando as rodadas...\n')
let winner = null
let round = 1
let currentPlayer = { ...linkedList.initialNode }
let lastPlayer = { ...linkedList.initialNode }
let lastNumber = null

while (winner === null) {
    // Já encontramos um vencedor
    if (linkedList.hasOnlyElement()) {
        console.log('\n=>> Chegamos no primeiro elemento')
        winner = linkedList.initialNode.value
        break
    }

    console.log(`\n=>> Iniciando o round ${round}.\n`)

    
    console.log(`=>> O jogador atual é o ${currentPlayer.value}`)
    
    let jogada = readline.question('=>>Pressione enter para selecionar uma carta!')
    const number = getRandomNumber()

    console.log(`=>> Foi tirada a carta ${number}`)

    const auxCurrentPlayer = { ...currentPlayer }

    switch (number) {
        case 0:
            currentPlayer = executeToZeroNumber()
            break

        case 1:
            currentPlayer = executeToOneNumber(currentPlayer)
            break

        case 3:
            currentPlayer = executeToThreeNumber(linkedList, currentPlayer)
            break

        case 9:
            currentPlayer = executeToNineNumber(linkedList, currentPlayer)
            break

        case 12:
            if (round === 1) {
                console.log('=>> Pulando para o próximo jogador, pois é a primeira rodada')
                currentPlayer = currentPlayer.nextNode
                break
            }

            if ([3].includes(lastNumber)) {
                console.log('=>> Pulando para o próximo player pois a carta anterior é a 3, que já eliminou o jogador anterior')
                currentPlayer = currentPlayer.nextNode
                break
            }
            currentPlayer = executeToTwelveNumber(linkedList, currentPlayer, lastPlayer)
            break

        case 13:
            currentPlayer = executeToThirteenNumber()
            break
    }

    lastPlayer = { ...auxCurrentPlayer }
    lastNumber = number

    console.log(`=>> Passando para o player ${currentPlayer.value}`)

    round++
}

console.log('\n=>>>> Mostrando o vencedor...')
console.log(`\n=>>>> O vencedor ${winner} é implacável`)

}

main()
