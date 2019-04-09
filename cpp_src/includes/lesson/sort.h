#ifndef LESSON_SORT_H_
#define LESSON_SORT_H_
#include "vector.h"

namespace lesson {
class sort {
 private:
  static void quick(lesson::vector& vec, int left, int right);

 public:
  static void quick(lesson::vector& vec);
  static void bubble(lesson::vector& vec);
};
}  // namespace lesson

#endif
