#include <algorithm>
#include <chrono>
#include <functional>
#include <iostream>
#include <random>
#include <this/sort.hpp>
#include <vector>
#define SIZE 100000

int main() {
  std::vector<int> vec(SIZE);
  std::random_device random_device;
  std::mt19937 generator(random_device());

  std::generate(vec.begin(), vec.end(), [&generator]() { return generator(); });

  auto chrono = [vec](std::function<void(std::vector<int> vec)> exectute) {
    std::vector<int> new_(vec);
    auto start = std::chrono::high_resolution_clock::now();
    exectute(new_);
    auto finish = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> elapsed = finish - start;
    std::cout << "Elapsed time: " << elapsed.count() << std::endl;
    std::cout << std::endl;
  };

  auto is_sorted = [](std::vector<int> vec) {
    if (std::is_sorted(vec.begin(), vec.end())) {
      std::cout << "Is sorted!" << std::endl;
    } else {
      std::cout << "It is not sorted!" << std::endl;
    }
  };

  // Bubble Sort
  chrono([&is_sorted](std::vector<int> vec) {
    std::cout << "Bubble Sort... ";
    aula::bubble_sort(vec);
    std::cout << "Complete!" << std::endl;
    is_sorted(vec);
  });

  // Bubble Sort Enhanced
  chrono([&is_sorted](std::vector<int> vec) {
    std::cout << "Bubble Sort Enhanced... ";
    aula::bubble_sort_enhanced(vec);
    std::cout << "Complete!" << std::endl;
    is_sorted(vec);
  });

  // Quick Sort
  chrono([&is_sorted](std::vector<int> vec) {
    std::cout << "Quick Sort... ";
    aula::quick_sort(vec, 0, SIZE - 1);
    std::cout << "Complete!" << std::endl;
    is_sorted(vec);
  });

  return EXIT_SUCCESS;
}
