const taskStackOperations = () => {
  print('Insira o tamanho da pilha:');
  const size = Number(readline());

  const stack = new StackOperations(size);

  let choice;
  let element;
  do {
    print('1 - Exibir pilha (Limpa a Pilha)');
    print('2 - Adicionar um elemento ao topo');
    print('3 - Remover o elemento do topo');
    print('4 - Olhar o elemento do topo');
    print('5 - Operações Unárias');
    print('6 - Operações Binárias');
    print('7 - A pilha está cheira?');
    print('8 - A pilha está vazia?');
    print('9 - Encerrar');
    print('Selecione uma opção [1-9]:');
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
        do {
          print('1 - DEC2 (Subtrair o valor 2 do elemento do topo)');
          print('2 - ADD3 (Adicionar o valor 3 ao elemento do topo)');
          print('3 - Voltar ao menu principal');
          print('Selecione uma opcao [1-3]:');
          choice = Number(readline());
          switch (choice) {
            case 1:
              stack.dec2();
              break;
            case 2:
              stack.add3();
              break;
          }
        } while (choice !== 3);
        break;
      case 6:
        do {
          print('1 - ADD (Adição X + Y)');
          print('2 - SUB (Subtração X - Y)');
          print('3 - MPY (Multiplicacão X * Y)');
          print('4 - DIV (Divisão X / Y)');
          print('5 - Voltar ao menu principal');
          print('Selecione uma opcao [1-5]:');
          choice = Number(readline());
          switch (choice) {
            case 1:
              print(stack.add());
              break;
            case 2:
              print(stack.sub());
              break;
            case 3:
              print(stack.mpy());
              break;
            case 4:
              print(stack.div());
              break;
          }
        } while (choice !== 5);
        break;
      case 7:
        stack.isFull()
         ? print('Sim')
         : print('Não');
        break;
      case 8:
        stack.isEmpty()
         ? print('Sim')
         : print('Não');
        break;
      case 9:
        print('Encerrando aplicação...');
        break;
      default:
        print('Escolha uma opção!');
        break;
    }
  } while (choice !== 9);
}
