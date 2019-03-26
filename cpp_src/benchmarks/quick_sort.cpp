#include <algorithm>
#include <chrono>
#include <iostream>
#include <this/sort.hpp>
#include <vector>
#define SIZE 100000

int main() {
  std::vector<int> elements(SIZE);
  std::generate(elements.begin(), elements.end(), []() {
    return rand();
  });
  auto start = std::chrono::high_resolution_clock::now();
  aula::quick_sort(elements, 0, SIZE - 1);
  auto finish = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double> elapsed = finish - start;
  std::cout << "Elapsed time: " << elapsed.count() << std::endl;
  return EXIT_SUCCESS;
}
