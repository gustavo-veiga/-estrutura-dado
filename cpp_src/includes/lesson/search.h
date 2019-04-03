#ifndef LESSON_SEARCH_H_
#define LESSON_SEARCH_H_
#include "vector.h"

namespace lesson {
struct search {
  static int linear(lesson::vector &vec, int element);
  static int binary(lesson::vector &vec, int element);
};
}  // namespace lesson

#endif
