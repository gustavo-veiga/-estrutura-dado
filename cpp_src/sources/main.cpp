#include <algorithm>
#include <iostream>
#include <iterator>
#include <random>
#include <vector>
#include "menu.hpp"

int main() {
  int size = 0;
  int min_value = 0;
  int max_value = 0;

  std::cout << "Insira o tamanho do vetor: ";
  std::cin >> size;
  std::cout << "Insira o menor valor: ";
  std::cin >> min_value;
  std::cout << "Insira o maior valor: ";
  std::cin >> max_value;

  std::vector<int> elements(size);
  std::random_device rd;
  std::mt19937 gen(rd());
  std::uniform_int_distribution<> dis(min_value, max_value);

  std::generate(elements.begin(), elements.end(), [&dis, &gen]() {
    // return rand() % max_value + min_value;
    return dis(gen);
  });

  while (true) {
    int choise = menu::show();
    switch (choise) {
      case 1:
        menu::show_all(elements);
        break;
      case 2:
        menu::quick_sort(elements);
        break;
      case 3:
        menu::bubble_sort(elements);
        break;
      case 4:
        menu::linear_search(elements);
        break;
      case 5:
        menu::binary_search(elements);
        break;
      case 6:
        menu::remove_one_element(elements);
        break;
      case 7:
        menu::exit();
        break;
      default:
        menu::invalid();
        break;
    }
  }
  return EXIT_SUCCESS;
}
