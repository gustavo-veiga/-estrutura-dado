const { DupleLinkedList } = require('./duple-linked-list')

const players = ['fulano', 'ciclano', 'beltrano', 'jordano', 'augustano']

/**
 * @method getRandomNumber
 * @return {Number} can be 2, 3, 5 or 7
 */
const getRandomNumber = () => {
  return 2
}

const executeToTwoNumber = list => {}

const executeToThreeNumber = list => {}

const executeToFiveNumber = list => {}

const executeToSevenNumber = list => {}

const main = () => {
  console.log('Começando desafio...')

  console.log('Inicializando a lista')
  const linkedList = new DupleLinkedList()

  console.log('ETAPAS')
  console.log('1. Populando a lista de players...\n')

  players.forEach(player => {
    linkedList.pushFront(player)
  })

  // console.log(`Verificando quantos elementos há na lista: ${linkedList.lenght()}`)
  // console.log(linkedList.lenght()) esta função entra em loop

  console.log('2. Começando as rodadas...\n')
  let winner = null
  let round = 1

  while (winner === null) {
    // Já encontramos um vencedor
    // if (linkedList.lenght() === 1) {
    //   winner = linkedList.initialNode.value
    //   break
    // }

    console.log(`2.1 Iniciando o round ${round}.\n`)

    const number = getRandomNumber()

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
