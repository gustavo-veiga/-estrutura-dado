#ifndef QUEUE_H_
#define QUEUE_H_
#include <cstdlib>

namespace lesson {
namespace array {
template <typename T>
class queue {
 private:
  T *data;
  size_t size_value;
  size_t first_value;
  size_t last_value;
  size_t total_value;

 public:
  queue(size_t size);
  ~queue();

  // Element Access
  T back();
  T front();

  // Modifiers
  T pop();
  void push(T element);
  void swap(size_t left, size_t right);

  // Capacity
  bool full();
  bool empty();
  size_t size();
};
}  // namespace array
}  // namespace lesson

#endif
