#ifndef CHRONO_H_
#define CHRONO_H_
#include <functional>

namespace lesson {
struct chrono {
  static double duration(std::function<void()> execute);
};
}  // namespace lesson

#endif
