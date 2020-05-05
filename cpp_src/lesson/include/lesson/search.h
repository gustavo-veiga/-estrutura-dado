#ifndef LESSON_SEARCH_H_
#define LESSON_SEARCH_H_
#include "array/vector.h"

namespace lesson {
struct search {
  static int linear(lesson::array::vector<int> &vec, int element);
  static int binary(lesson::array::vector<int> &vec, int element);
};
}  // namespace lesson

#endif
