#ifndef VECTOR_HPP_
#define VECTOR_HPP_
#include <vector>

namespace aula {
void remove_element_vector_not_sorted(std::vector<int> &vec, size_t index) {
  std::vector<int> new_vector(vec.size() - 1);
  std::swap(vec[index], vec[vec.size() - 1]);
  for (size_t i = 0; i < new_vector.size(); i++) {
    new_vector[i] = vec[i];
  }
  vec = new_vector;
}
void remove_element_vector_sorted(std::vector<int> &vec, size_t index) {
  std::vector<int> new_vector(vec.size() - 1);
  for (size_t i = index; i < vec.size(); i++) {
    vec[i] = vec[i + 1];
  }
  for (size_t i = 0; i < new_vector.size(); i++) {
    new_vector[i] = vec[i];
  }
  vec = new_vector;
}
}  // namespace aula

#endif
