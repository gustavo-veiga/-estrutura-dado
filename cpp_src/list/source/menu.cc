#include <list/menu.h>
#include <lesson/array/vector.h>
#include <lesson/chrono.h>
#include <lesson/console.h>
#include <lesson/search.h>
#include <lesson/sort.h>
#include <iostream>

namespace list {
int menu::show() {
  int choise;
  for (int i = 1; i < lesson::console::columns(); i++) {
    std::cout << "-";
  }
  std::cout << std::endl;
  std::cout << "1 - Exibir o vetor" << std::endl;
  std::cout << "2 - Ordenar os elementos (Quick Sort)" << std::endl;
  std::cout << "3 - Ordenar os elementos (Bubble Sort)" << std::endl;
  std::cout << "4 - Realizar a Busca Linear por um elemento" << std::endl;
  std::cout << "5 - Realizar a Busca Binaria por um elemento" << std::endl;
  std::cout << "6 - Excluir um elemento" << std::endl;
  std::cout << "7 - Encerar" << std::endl;
  std::cout << "Selecione uma opcao [1-7]: ";
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
  std::cout << "Insira o elemento a ser buscado: ";
  std::cin >> search;
  int result = lesson::search::linear(vec, search);
  if (result >= 0) {
    std::cout << "Elemento encontrado na posicao  " << result << std::endl;
  } else {
    std::cout << "Elemento nao encontrado" << std::endl;
  }
}

void menu::binary_search(lesson::array::vector<int> &vec) {
  int search;
  int result;
  std::cout << "Insira o elemento a ser buscado: ";
  std::cin >> search;
  if (!vec.is_sorted) {
    lesson::sort::quick(vec);
  }
  result = lesson::search::binary(vec, search);
  if (result >= 0) {
    std::cout << "Elemento encontrado na posicao " << result << std::endl;
  } else {
    std::cout << "Elemento nao encontrado" << std::endl;
  }
}

void menu::bubble_sort(lesson::array::vector<int> &vec) {
  double time = lesson::chrono::duration([&vec]() { lesson::sort::bubble(vec); });
  std::cout << "Os elementos foram ordenados em um tempo de " << time << " segundos." << std::endl;
  menu::show_all(vec);
}

void menu::quick_sort(lesson::array::vector<int> &vec) {
  double time = lesson::chrono::duration([&vec]() { lesson::sort::quick(vec); });
  std::cout << "Os elementos foram ordenados em um tempo de " << time << " segundos." << std::endl;
  menu::show_all(vec);
}

void menu::remove_element(lesson::array::vector<int> &vec) {
  int index;
  std::cout << "Insira o indice do elemento a ser removido: ";
  std::cin >> index;
  vec.remove(index);
}

void menu::exit() {
  std::cout << "Encerrando a aplicacao..." << std::endl;
  std::exit(EXIT_SUCCESS);
}

void menu::invalid() {
  std::cout << "Opcao invalida" << std::endl;
}
}  // namespace list
