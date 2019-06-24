#include <lesson/math/factorial.h>
#include <cstdlib>

namespace lesson {
namespace math {
int factorial::iterative(int n) {
  int f = n;
  for (size_t i = n - 1; i > 1; i--) {
    f *= i;
  }
  return f;
}

int factorial::recursive(int n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial::recursive(n - 1);
  }
}
}  // namespace math
}  // namespace lesson
