const readline = require('readline-sync')
const { LinkedList } = require('../lesson/duple-linked-list')

let gameWay = 'nextNode'

// let gameWayAvailable = ['nextNode', 'previousNode']

const getNextWay = currentWay => {
  if (currentWay === 'nextNode') {
    return 'previousNode'
  }
  return 'nextNode'
}

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
  const MAX_CARDS = 7
  let randomValue = (Math.floor(Math.random() * (0 - 2 + MAX_CARDS) + 2))
  if (randomValue == 1) {
    return 1
  } else if (randomValue == 2) {
    return 3
  } else if (randomValue == 3) {
    return 9
  } else if (randomValue == 4) {
    return 12
  } else if (randomValue == 5) {
    return 0
  } else if (randomValue == 6) {
    return 13
  }
}

const executeToOneNumber = (currentPlayer) => {
  console.log('=>> Pula o próximo jogador e passa a vez para o seguinte')
  return currentPlayer[gameWay][gameWay]
}

const executeToThreeNumber = (list, currentPlayer) => {
  const playerToRemove = currentPlayer[gameWay][gameWay]
  console.log('=>> Elimina o terceiro jogador contado a partir do jogador atual.')
  list.removeNode(playerToRemove)
  return currentPlayer[gameWay]
}

const executeToNineNumber = (list, currentPlayer, lastPlayer) => {
  console.log('=>> Elimina o jogador da rodada anterior (o jogador que tirou a carta antes).')
  list.removeNode(lastPlayer)
  return currentPlayer[gameWay]
}

const executeToTwelveNumber = (currentPlayer) => {
  console.log('Inverte o sentido do jogo')
  gameWay = getNextWay(gameWay)
  console.log(`O sentido passará a ser: ${gameWay}`)
  return currentPlayer[gameWay]
}

const executeToZeroNumber = (currentPlayer) => {
  console.log(`O jogador ${currentPlayer.value} ficara 3 rodadas sem poder jogar`)
  return currentPlayer[gameWay]
}

const executeToThirteenNumber = (currentPlayer) => {
  let stepPlayers = readline.question(`${currentPlayer.value} escolha quantos jogadores deseja pular: `)
  stepPlayers = parseInt(stepPlayers)
  // TODO: Adicionar condicao para aceitar somente numeros
  for (let i = 0; i < stepPlayers; i++) {
    currentPlayer = currentPlayer[gameWay]
  }
  console.log(`Foram pulados ${stepPlayers} jogadores, passando a vez para o ${currentPlayer[gameWay].value}`)
  return currentPlayer[gameWay]
}


const main = () => {
  console.clear()
  console.log('=> Começando desafio...')
  console.log('=> Inicializando a lista')
  const linkedList = new LinkedList()
  console.log('=> Insira a lista de players...\n')
  let fallBackPlayers = [
    'fulano',
    'ciclano',
    'beltrano',
    'jordano',
    'thanos'
  ]
  let players = []
  let countOfPlayers = 0
  console.log("O jogo se inicia com no minimo 5 e no maximo 10 jogadores :)")
  console.log('Gostaria de usar uma lista padrão a seguir?')
  console.log(fallBackPlayers)
  const res = readline.question('Sim (S) ou Não (N): ')
  if (res.toUpperCase() === 'S') {
    players = [...fallBackPlayers]
  } else {
    for (let i = 0; i < 10; i++) {
      // TODO: Só aceitar valores de nomes válidos
      players[i] = readline.question(`Digite o nome do player ${i + 1}: `)

      if (players[i] === '0' && i == 5) {
        break
      }
      else if (players[i] === '0' && i <= 5) {
        console.log("Ainda não cumprimos nossa meta, não é mesmo? ")
        i--
      }
    }
  }
  // Carregando a lista duplamente encadeada
  players.forEach(player => {
    linkedList.push(player)
  })
  console.log('=> A lista foi populada com sucesso')
  // console.clear()
  linkedList.showList()
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
      winner = currentPlayer.value
      break
    }
    console.log(`\n=>> Iniciando o round ${round}.\n`)
    console.log(`=>> O jogador atual é o ${currentPlayer.value}`)
    readline.question('=>>Pressione enter para selecionar uma carta! [ Enter ]')
    const number = getRandomNumber()
    console.log(`=>> Foi tirada a carta ${number}`)
    const auxCurrentPlayer = { ...currentPlayer }
    switch (number) {
      case 0:
        currentPlayer = executeToZeroNumber(currentPlayer)
        break
      case 1:
        currentPlayer = executeToOneNumber(currentPlayer)
        break
      case 3:
        currentPlayer = executeToThreeNumber(linkedList, currentPlayer)
        break
      case 9:
        if (round === 1) {
          console.log('=>> Pulando para o próximo jogador, pois é a primeira rodada')
          currentPlayer = currentPlayer[gameWay]
          break
        }
        currentPlayer = executeToNineNumber(linkedList, currentPlayer, lastPlayer)
        break
      case 12:
        currentPlayer = executeToTwelveNumber(currentPlayer)
        break
      case 13:
        currentPlayer = executeToThirteenNumber(currentPlayer)
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
