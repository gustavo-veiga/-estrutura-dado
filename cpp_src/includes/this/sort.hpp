#ifndef SORT_HPP_
#define SORT_HPP_
#include <vector>

namespace aula {
bool is_sorted(std::vector<int>& vec) {
  if (vec.size() == 0 || vec.size() == 1) {
    return true;
  }
  for (size_t i = 0; i < vec.size() - 1; i++) {
    if (vec[i] > vec[i + 1]) {
      return false;
    }
  }
  return true;
}

void bubble_sort(std::vector<int>& vec) {
  for (size_t i = 0; i < vec.size() - 1; i++) {
    for (size_t j = 0; j < vec.size() - i - 1; j++) {
      if (vec[j] > vec[j + 1]) {
        std::swap(vec[j], vec[j + 1]);
      }
    }
  }
}

void bubble_sort_enhanced(std::vector<int>& vec) {
  size_t i = 0, j = 1;
  bool sorted = false;

  while (!sorted) {
    sorted = true;
    for (i = 0; i < vec.size() - j; i++) {
      if (vec[i] > vec[i + 1]) {
        std::swap(vec[i], vec[i + 1]);
        sorted = false;
      }
    }
    j++;
  }
}

void quick_sort(std::vector<int>& vec, int left, int right) {
  int tmp;
  int i = left, j = right;
  int pivot = vec[(left + right) / 2];

  while (i <= j) {
    while (vec[i] < pivot) i++;
    while (vec[j] > pivot) j--;
    if (i <= j) {
      tmp = vec[i];
      vec[i] = vec[j];
      vec[j] = tmp;
      i++;
      j--;
    }
  };
  if (left < j) quick_sort(vec, left, j);
  if (i < right) quick_sort(vec, i, right);
}
}  // namespace aula

#endif
