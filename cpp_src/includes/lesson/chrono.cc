#include "chrono.h"
#include <chrono>
#include <functional>

double lesson::chrono::duration(std::function<void()> execute) {
  auto start = std::chrono::high_resolution_clock::now();
  execute();
  auto finish = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double> elapsed = finish - start;
  return elapsed.count();
}
