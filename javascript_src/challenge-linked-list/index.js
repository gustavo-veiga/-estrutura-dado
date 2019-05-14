const { DupleLinkedList } = require('./duple-linked-list')

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

// Na execucao das acoes devemos receber tambem o player onde a lista esta, sua posicao
// pois dai conseguimos montar as acoes

const executeToTwoNumber = list => {
  return console.log('Executando o 2')
}

const executeToThreeNumber = list => {
  // return console.log('Executando o 3')
  let playerToDelete = player

}

const executeToFiveNumber = list => {
  return console.log('Executando o 5')
}

const executeToSevenNumber = list => {
  return console.log('Executando o 7')
}

const main = () => {
  console.log('Começando desafio...')

  console.log('Inicializando a lista')
  const linkedList = new DupleLinkedList()

  
  console.log('ETAPAS')
  console.log('1. Populando a lista de players...\n')
  
  players.forEach(player => {
    linkedList.pushFront(player)
  })
  
  console.log(linkedList)
  // console.log(`Verificando quantos elementos há na lista: ${linkedList.lenght()}`) //esta função entra em loop
  // console.log(linkedList.lenght()) //esta função entra em loop

  console.log('2. Começando as rodadas...\n')
  let winner = null
  let round = 1

  while (winner === null) {
    // Já encontramos um vencedor
    // if (linkedList.nextNode == linkedList.previusNode) {
    //   winner = linkedList.initialNode.value
    //   break
    // }

    console.log(`2.1 Iniciando o round ${round}.\n`)

    const number = getRandomNumber()
    //  console.log(number)

    break
  
    switch (number) {
      case 2:
        executeToTwoNumber(linkedList)
        break
      case 3:
        executeToThreeNumber(linkedList)
        break
      case 5:
        executeToFiveNumber(linkedList)
        break
      case 7:
        executeToSevenNumber(linkedList)
        break
    }

    round++
  }

  console.log('3. Mostrando o vencedor...')
  console.log(`O vencedor é o player ${winner}`)
}

main()
