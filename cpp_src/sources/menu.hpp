#include <lesson/chrono.h>
#include <lesson/console.h>
#include <lesson/search.h>
#include <lesson/sort.h>
#include <lesson/array/vector.h>
#include <iostream>

namespace menu {
int show() {
  int choise;
  for (size_t i = 1; i < lesson::console::columns(); i++) {
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

void show_all(lesson::array::vector<int> &vec) {
  std::cout << "{ ";
  for (int i = 0; i <= vec.end(); i++) {
    std::cout << vec.get(i) << " ";
  }
  std::cout << "}" << std::endl;
}

void linear_search(lesson::array::vector<int> &vec) {
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

void binary_search(lesson::array::vector<int> &vec) {
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

void bubble_sort(lesson::array::vector<int> &vec) {
  double time = lesson::chrono::duration([&vec]() {
    lesson::sort::bubble(vec);
  });
  std::cout << "Os elementos foram ordenados em um tempo de " << time
            << " segundos." << std::endl;
  show_all(vec);
}

void quick_sort(lesson::array::vector<int> &vec) {
  double time = lesson::chrono::duration([&vec]() {
    lesson::sort::quick(vec);
  });
  std::cout << "Os elementos foram ordenados em um tempo de " << time
            << " segundos." << std::endl;
  show_all(vec);
}

void remove_element(lesson::array::vector<int> &vec) {
  int index;
  std::cout << "Insira o indice do elemento a ser removido: ";
  std::cin >> index;
  vec.remove(index);
}

void exit() {
  std::cout << "Encerrando a aplicao..." << std::endl;
  std::exit(EXIT_SUCCESS);
}

void invalid() {
  std::cout << "Opcao invalida" << std::endl;
}
}  // namespace menu
