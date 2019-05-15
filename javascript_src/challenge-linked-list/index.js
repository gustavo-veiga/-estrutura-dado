const { LinkedList } = require('./duple-linked-list')

const players = ['fulano', 'ciclano', 'beltrano', 'jordano', 'augustano'
                  , 'zutano', 'luciano', 'butano', 'teclando', 'thanos']

/**
 * @method getRandomNumber
 * @return {Number} can be 2, 3, 5 or 7
 */
const getRandomNumber = () => {
  let randomValue = (Math.floor(Math.random() * (0 - 5 + 1) + 5))
  
  if (randomValue == 1) {
    return 2
  }

  else if (randomValue == 2) {
    return 3
  }

  else if (randomValue == 3) {
    return 5
  }

  else if (randomValue == 4) {
    return 7
  }
}

/* Significado das cartas
 * 2 – Pula o próximo jogador e passa a vez para o seguinte.
 * 3 – Elimina o jogador atual.
 * 5 – Elimina o terceiro jogador contado a partir do jogador atual.
 * 7 – Elimina o jogador da rodada anterior (o jogador que tirou a carta antes).
*/
// Na execucao das acoes devemos receber tambem o player onde a lista esta, sua posicao
// pois dai conseguimos montar as acoes

const executeToTwoNumber = (currentPlayer) => {
  return currentPlayer.nextNode.nextNode
}

const executeToThreeNumber = (list, currentPlayer) => {
  list.removeNode(currentPlayer)
  return currentPlayer.nextNode
}

const executeToFiveNumber = (list, currentPlayer) => {
  const playerToRemove = currentPlayer.nextNode.nextNode
  list.removeNode(playerToRemove)
  return currentPlayer.nextNode
}

const executeToSevenNumber = (list, currentPlayer, lastPlayer) => {
  list.removeNode(lastPlayer)
  return currentPlayer.nextNode
}

const main = () => {
  console.log('Começando desafio...')

  console.log('Inicializando a lista')
  const linkedList = new LinkedList()

  
  console.log('ETAPAS')
  console.log('1. Populando a lista de players...\n')
  
  players.forEach(player => {
    linkedList.push(player)
  })

  console.log('2. Começando as rodadas...\n')
  let winner = null
  let round = 1
  let currentPlayer = { ...linkedList.initialNode }
  let lastPlayer = { ...linkedList.initialNode }

  while (winner === null) {
    // Já encontramos um vencedor
    if (linkedList.hasOnlyElement()) {
      console.log('\nChegamos no primeiro elemento')
      winner = linkedList.initialNode.value
      break
    }

    console.log(`2.1 Iniciando o round ${round}.\n`)

    const number = getRandomNumber()

    console.log(`O jogador atual é o ${currentPlayer.value}`)
    console.log(`Foi tirada a carta ${number}`)
  
    switch (number) {
      case 2:
        currentPlayer = executeToTwoNumber(currentPlayer)
        break
      case 3:
        currentPlayer = executeToThreeNumber(linkedList, currentPlayer)
        break
      case 5:
        currentPlayer = executeToFiveNumber(linkedList, currentPlayer)
        break
      case 7:
        if (round === 1) {
          currentPlayer = currentPlayer.nextNode
          break
        }
        currentPlayer = executeToSevenNumber(linkedList, currentPlayer, lastPlayer)
        break
    }

    lastPlayer = { ...currentPlayer }

    console.log(`\nPassando para o player ${currentPlayer.value}`)

    round++
  }

  console.log('\n3. Mostrando o vencedor...')
  console.log(`O vencedor ${winner} é implacável`)
}

main()
