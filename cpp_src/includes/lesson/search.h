#ifndef LESSON_SEARCH_H_
#define LESSON_SEARCH_H_
#include <vector>

namespace lesson {
size_t linear_search_first(std::vector<int> &vec, int element);
std::vector<size_t> linear_search_all(std::vector<int> &vec, int element);
size_t binary_search(std::vector<int> &vec, int element);
}  // namespace aula

#endif
