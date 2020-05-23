const task1 = () => {
  print('Insira o tamanho da pilha:');
  const size = Number(readline());

  const stack = new Stack(size);

  let choice;
  let element;
  do {
    print('1 - Exibir pilha (Limpa a Pilha)');
    print('2 - Adicionar um elemento ao topo');
    print('3 - Remover o elemento do topo');
    print('4 - Olhar o elemento do topo');
    print('5 - A pilha está cheira?');
    print('6 - A pilha está vazia?');
    print('7 - Encerrar');
    print('Selecione uma opção [1-7]:');
    choice = Number(readline());
    switch (choice) {
      case 1:
        if (stack.isEmpty()) {
          print('A pilha está vazia!')
        } else {
          while (!stack.isEmpty()) {
            print(stack.pop());
          }
        }
        break;
      case 2:
        print('Insira o valor do elemento:');
        element = Number(readline());
        stack.push(element);
        break;
      case 3:
        print(`O elemento removido foi: ${stack.pop()}`);
        break;
      case 4:
        print(`O elemento do topo é: ${stack.top}`)
        break;
      case 5:
        stack.isFull()
         ? print('Sim')
         : print('Não');
        break;
      case 6:
        stack.isEmpty()
         ? print('Sim')
         : print('Não');
        break;
      case 7:
        print('Encerrando aplicação...');
        break;
      default:
        print('Escolha uma opção!');
        break;
    }
  } while (choice !== 7);
}
