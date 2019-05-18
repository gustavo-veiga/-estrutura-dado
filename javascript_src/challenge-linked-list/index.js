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
  console.log('=>> Pula o próximo jogador')
  return currentPlayer.nextNode.nextNode
}

const executeToThreeNumber = (list, currentPlayer) => {
  console.log('=>> Elimina o jogador atual')
  list.removeNode(currentPlayer)
  return currentPlayer.nextNode
}

const executeToFiveNumber = (list, currentPlayer) => {
  const playerToRemove = currentPlayer.nextNode.nextNode
  console.log('=>> Elimina o terceiro jogador contado a partir do jogador atual.')
  list.removeNode(playerToRemove)
  return currentPlayer.nextNode
}

const executeToSevenNumber = (list, currentPlayer, lastPlayer) => {
  console.log('=>> Elimina o jogador da rodada anterior (o jogador que tirou a carta antes).')
  list.removeNode(lastPlayer)
  return currentPlayer.nextNode
}

const main = () => {
  console.log('=> Começando desafio...')

  console.log('=> Inicializando a lista')
  const linkedList = new LinkedList()

  console.log('=> Populando a lista de players...\n')
  
  players.forEach(player => {
    linkedList.push(player)
  })

  console.log('=> A lista populada')
  linkedList.showList()
  console.log('')

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

    const number = getRandomNumber()

    console.log(`=>> O jogador atual é o ${currentPlayer.value}`)
    console.log(`=>> Foi tirada a carta ${number}`)

    const auxCurrentPlayer = { ...currentPlayer }
  
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
          console.log('=>> Pulando para o próximo jogador, pois é a primeira rodada')
          currentPlayer = currentPlayer.nextNode
          break
        }

        if ([ 3 ].includes(lastNumber)) {
          console.log('=>> Pulando para o próximo player pois a carta anterior é a 3, que já eliminou o jogador anterior')
          currentPlayer = currentPlayer.nextNode
          break
        }
        currentPlayer = executeToSevenNumber(linkedList, currentPlayer, lastPlayer)
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
