#include "search.h"
#include <vector>

size_t lesson::linear_search_first(std::vector<int> &vec, int element) {
  for (size_t i = 0; i < vec.size(); i++) {
    if (vec[i] == element) {
      return i;
    }
  }
  return -1;
}

std::vector<size_t> lesson::linear_search_all(std::vector<int> &vec,
                                              int element) {
  std::vector<size_t> results;
  for (size_t i = 0; i < vec.size(); i++) {
    if (vec[i] == element) {
      results.push_back(i);
    }
  }
  return results;
}

size_t lesson::binary_search(std::vector<int> &vec, int element) {
  size_t lower_limit = 0;
  size_t upper_limit = vec.size() - 1;
  while (lower_limit <= upper_limit) {
    size_t middle = (lower_limit + upper_limit) / 2;
    if (element == vec[middle]) {
      return middle;
    } else if (element < vec[middle]) {
      upper_limit = middle - 1;
    } else {
      lower_limit = middle + 1;
    }
  }
  return -1;
}
