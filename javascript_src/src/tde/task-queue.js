const taskQueue = () => {
  print('Insira o tamanho da fila:');
  const size = Number(readline());

  const queue = new Queue(size);

  let choice;
  let element;
  do {
    print('1 - Exibir fila');
    print('2 - Adicionar um elemento');
    print('3 - Remover um elemento');
    print('4 - A fila está cheira?');
    print('5 - A fila está vazia?');
    print('6 - Encerrar');
    print('Selecione uma opção [1-6]:');
    choice = Number(readline());
    switch (choice) {
      case 1:
        // TODO pecorrer fila
        break;
      case 2:
        print('Insira o valor do elemento:');
        element = Number(readline());
        queue.push(element);
        break;
      case 3:
        print(`O elemento removido foi: ${queue.pop()}`);
        break;
      case 4:
        queue.isFull()
          ? print('Sim')
          : print('Não');
        break;
      case 5:
        queue.isEmpty()
          ? print('Sim')
          : print('Não');
        break;
      case 6:
        print('Encerrando aplicação...');
        break;
      default:
        print('Escolha uma opção!');
        break;
    }
  } while (choice !== 6);
}
