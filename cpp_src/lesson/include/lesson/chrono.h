#ifndef LESSON_CHRONO_H_
#define LESSON_CHRONO_H_
#include <functional>

namespace lesson {
struct chrono {
  static double duration(std::function<void()> execute);
};
}  // namespace lesson

#endif
