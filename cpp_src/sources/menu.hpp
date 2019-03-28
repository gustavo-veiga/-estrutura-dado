#include <iostream>
#include <lesson/helper.hpp>
#include <lesson/print.hpp>
#include <lesson/search.hpp>
#include <lesson/sort.hpp>
#include <vector>

namespace menu {
int show() {
  int choise;
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

void show_all(std::vector<int> &vec) { std::cout << vec << std::endl; }

void linear_search(std::vector<int> &v) {
  int search;
  std::cout << "Insira o elemento a ser buscado: ";
  std::cin >> search;
  std::vector<size_t> results = aula::linear_search_all(v, search);
  if (results.size() > 0) {
    std::cout << "Elemento encontrado nas seguites posicoes  " << std::endl;
    std::cout << results << std::endl;
  } else {
    std::cout << "Elemento nao encontrado" << std::endl;
  }
  results.clear();
  results.shrink_to_fit();
}

void binary_search(std::vector<int> &vec) {
  int search;
  int result;
  std::cout << "Insira o elemento a ser buscado: ";
  std::cin >> search;
  if (!aula::is_sorted(vec)) {
    aula::quick_sort(vec, 0, vec.size() - 1);
  }
  result = aula::binary_search(vec, search);
  if (result >= 0) {
    std::cout << "Elemento encontrado na posicao " << result << std::endl;
  } else {
    std::cout << "Elemento nao encontrado" << std::endl;
  }
}

void bubble_sort(std::vector<int> &vec) {
  aula::bubble_sort(vec);
  std::cout << "Os elementos foram ordenados!" << std::endl;
  std::cout << vec << std::endl;
}

void quick_sort(std::vector<int> &vec) {
  aula::quick_sort(vec, 0, vec.size() - 1);
  std::cout << "Os elementos foram ordenados!" << std::endl;
  std::cout << vec << std::endl;
}

void remove_one_element(std::vector<int> &vec) {
  unsigned long long position;
  std::cout << "Insira o indice do elemento a ser removido: ";
  std::cin >> position;
  if(aula::is_sorted(vec)) {
    aula::remove_element_vector_sorted(vec, position);
  } else {
    aula::remove_element_vector_not_sorted(vec, position);
  }
}

void exit() {
  std::cout << "Encerrando a aplicao..." << std::endl;
  std::exit(EXIT_SUCCESS);
}

void invalid() { std::cout << "Opcao invalida" << std::endl; }
}  // namespace menu
