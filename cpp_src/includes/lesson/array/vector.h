#ifndef LESSON_VECTOR_H_
#define LESSON_VECTOR_H_
#include <cstdlib>

namespace lesson {
namespace array {
template <typename T>
class vector {
 private:
  T* data;
  size_t size_value = 0;
  size_t count_value = 0;
  void alloc(size_t size);
  void realloc(size_t size);

 public:
  vector();
  vector(size_t size);
  ~vector();

  // Element Access
  T& operator[](size_t index);

  // Modifiers
  void push(T element);
  void swap(size_t left, size_t right);
  void remove(size_t index);

  // Capacity
  size_t end();
  size_t size();
  size_t capacity();

  // Extras
  bool is_sorted = false;
};
}  // namespace array
}  // namespace lesson

#endif
