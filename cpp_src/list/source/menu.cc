#include <list/menu.h>
#include <lesson/array/vector.h>
#include <lesson/chrono.h>
#include <lesson/console.h>
#include <lesson/search.h>
#include <lesson/sort.h>
#include <fmt/format.h>
#include <iostream>

namespace list {
int menu::show() {
  int choise;
  fmt::print("{0:─^{1}}", "", lesson::console::columns());
  std::cout << "1 - Exibir o vetor" << std::endl;
  std::cout << "2 - Ordenar os elementos (Quick Sort)" << std::endl;
  std::cout << "3 - Ordenar os elementos (Bubble Sort)" << std::endl;
  std::cout << "4 - Realizar a Busca Linear por um elemento" << std::endl;
  std::cout << "5 - Realizar a Busca Binaria por um elemento" << std::endl;
  std::cout << "6 - Excluir um elemento" << std::endl;
  std::cout << "7 - Encerrar" << std::endl;
  fmt::print("Selecione uma opção [1-7]: ");
  std::cin >> choise;
  return choise;
}

void menu::show_all(lesson::array::vector<int> &vec) {
  std::cout << "{ ";
  for (size_t i = 0; i <= vec.end(); i++) {
    std::cout << vec[i] << " ";
  }
  std::cout << "}" << std::endl;
}

void menu::linear_search(lesson::array::vector<int> &vec) {
  int search;
  fmt::print("Insira o elemento a ser buscado: ");
  std::cin >> search;
  int result = lesson::search::linear(vec, search);
  if (result >= 0) {
    fmt::print("Elemento encontrado na posição {}.\n", result);
  } else {
    fmt::print("Elemento não encontrado.\n");
  }
}

void menu::binary_search(lesson::array::vector<int> &vec) {
  int search;
  int result;
  fmt::print("Insira o elemento a ser buscado: ");
  std::cin >> search;
  if (!vec.is_sorted) {
    lesson::sort::quick(vec);
  }
  result = lesson::search::binary(vec, search);
  if (result >= 0) {
    fmt::print("Elemento encontrado na posição {}.\n", result);
  } else {
    fmt::print("Elemento não encontrado.\n");
  }
}

void menu::bubble_sort(lesson::array::vector<int> &vec) {
  double time = lesson::chrono::duration([&vec]() { lesson::sort::bubble(vec); });
  fmt::print("Os elementos foram ordenados em um tempo de {} segundos.\n", time);
  menu::show_all(vec);
}

void menu::quick_sort(lesson::array::vector<int> &vec) {
  double time = lesson::chrono::duration([&vec]() { lesson::sort::quick(vec); });
  fmt::print("Os elementos foram ordenados em um tempo de {} segundos.\n", time);
  menu::show_all(vec);
}

void menu::remove_element(lesson::array::vector<int> &vec) {
  int index;
  fmt::print("Insira o índice do elemento a ser removido: ");
  std::cin >> index;
  vec.remove(index);
}

void menu::exit() {
  fmt::print("Encerrando a aplicação...\n");
  std::exit(EXIT_SUCCESS);
}

void menu::invalid() {
  fmt::print("Opção inválida.\n");
}
}  // namespace list
