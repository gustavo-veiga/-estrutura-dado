#ifndef LESSON_VECTOR_H_
#define LESSON_VECTOR_H_

#include <vector>

namespace lesson {
struct vector {
  static void remove_element_vector_not_sorted(std::vector<int> &vec, size_t index);
  static void remove_element_vector_sorted(std::vector<int> &vec, size_t index);
};
}  // namespace lesson

#endif
