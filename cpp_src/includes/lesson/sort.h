#ifndef LESSON_SORT_H_
#define LESSON_SORT_H_
#include "vector.h"

namespace lesson {
struct sort {
  static void bubble(lesson::vector& vec);
  static void quick(lesson::vector& vec, int left, int right);
};
}  // namespace lesson

#endif
