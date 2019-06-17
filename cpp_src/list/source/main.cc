#include <lesson/array/vector.h>
#include <iostream>
#include <random>
#include <list/menu.h>

int main() {
  size_t size = 0;
  int min_value = 0;
  int max_value = 0;

  std::cout << "Insira o tamanho do vetor: ";
  std::cin >> size;
  std::cout << "Insira o menor valor: ";
  std::cin >> min_value;
  std::cout << "Insira o maior valor: ";
  std::cin >> max_value;

  auto elements = lesson::array::vector<int>(size);
  std::random_device rd;
  std::mt19937 gen(rd());
  std::uniform_int_distribution<> dis(min_value, max_value);

  for (size_t i = 0; i < size; i++) {
    elements.push(dis(gen));
  }

  while (true) {
    int choise = list::menu::show();
    switch (choise) {
      case 1:
        list::menu::show_all(elements);
        break;
      case 2:
        list::menu::quick_sort(elements);
        break;
      case 3:
        list::menu::bubble_sort(elements);
        break;
      case 4:
        list::menu::linear_search(elements);
        break;
      case 5:
        list::menu::binary_search(elements);
        break;
      case 6:
        list::menu::remove_element(elements);
        break;
      case 7:
        list::menu::exit();
        break;
      default:
        list::menu::invalid();
        break;
    }
  }
  return EXIT_SUCCESS;
}
