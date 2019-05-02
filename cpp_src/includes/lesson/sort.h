#ifndef LESSON_SORT_H_
#define LESSON_SORT_H_
#include "array/vector.h"

namespace lesson {
class sort {
 private:
  static void quick(lesson::array::vector& vec, int left, int right);

 public:
  static void quick(lesson::array::vector& vec);
  static void bubble(lesson::array::vector& vec);
};
}  // namespace lesson

#endif
