#include <lesson/console.h>
#include <lesson/array/stack.h>
#include <iostream>

int main() {
  int size = 0;

  std::cout << "Insira o tamanho da pilha: ";
  std::cin >> size;

  auto stack = lesson::array::stack<int>(size);

  int choise = 0;
  while (true) {
    std::cout << "1 - Exibir pilha (Limpa a Pilha)" << std::endl;
    std::cout << "2 - Adicionar um elemento ao topo" << std::endl;
    std::cout << "3 - Remover o elemento do topo" << std::endl;
    std::cout << "4 - Operacoes Unarias" << std::endl;
    std::cout << "5 - Operacoes Binarias" << std::endl;
    std::cout << "6 - Encerar" << std::endl;
    std::cout << "Selecione uma opcao [1-6]: ";
    std::cin >> choise;
    switch (choise) {
      case 1:
        std::cout << "{ ";
        while (!stack.empty()) {
          int x = stack.pop();
          std::cout << x << " ";
        }
        std::cout << "}" << std::endl;
        break;
      case 2:
        int element;
        std::cout << "Insira o valor do elemento: ";
        std::cin >> element;
        stack.push(element);
        break;
      case 3:
        try {
          stack.pop();
        } catch (const std::exception& e) {
          std::cerr << e.what() << std::endl;
        }
        break;
      case 4:
        do {
          std::cout << "1 - DEC2 (Subtrair o valor 2 do elemento do topo)" << std::endl;
          std::cout << "2 - ADD3 (Adicionar o valor 3 ao elemento do topo)" << std::endl;
          std::cout << "3 - Voltar ao menu principal" << std::endl;
          std::cout << "Selecione uma opcao [1-3]: ";
          std::cin >> choise;
          switch (choise) {
            case 1:
              stack.dec2();
              break;
            case 2:
              stack.add3();
              break;
          }
        } while (choise != 3);
        break;
      case 5:
        do {
          std::cout << "1 - ADD (Adicao X + Y)" << std::endl;
          std::cout << "2 - SUB (Subtracao X - Y)" << std::endl;
          std::cout << "3 - MPY (Multiplicacao X * Y)" << std::endl;
          std::cout << "4 - DIV (Divisao X / Y)" << std::endl;
          std::cout << "5 - Voltar ao menu principal" << std::endl;
          std::cout << "Selecione uma opcao [1-5]: ";
          std::cin >> choise;
          switch (choise) {
            case 1:
              try {
                stack.add();
              } catch (const std::exception& e) {
                std::cerr << e.what() << std::endl;
              }
              break;
            case 2:
              try {
                stack.sub();
              } catch (const std::exception& e) {
                std::cerr << e.what() << std::endl;
              }
              break;
            case 3:
              try {
                stack.mpy();
              } catch (const std::exception& e) {
                std::cerr << e.what() << std::endl;
              }
              break;
            case 4:
              try {
                stack.div();
              } catch (const std::exception& e) {
                std::cerr << e.what() << std::endl;
              }
              break;
          }
        } while (choise != 5);
        break;
      case 6:
        std::exit(EXIT_SUCCESS);
        break;
      default:
        break;
    }
  }

  return EXIT_SUCCESS;
}
