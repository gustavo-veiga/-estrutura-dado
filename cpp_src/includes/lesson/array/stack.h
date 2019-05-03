#ifndef STACK_H_
#define STACK_H_
#include <cstdlib>

namespace lesson {
namespace array {
template <typename T>
class stack {
 private:
  T* data;
  size_t top_value;
  size_t size_value;
  void alloc(size_t size);
  void realloc(size_t size);

 public:
  stack(size_t size);
  ~stack();

  // Element Access
  T top();

  // Modifiers
  T pop();
  void push(T element);
  void swap(size_t left, size_t right);

  // Capacity
  bool full();
  bool empty();
  size_t size();

  // Unary Operations
  void dec2();
  void add3();

  // Binary Operations
  void add();
  void sub();
  void mpy();
  void div();
};
}  // namespace array
}  // namespace lesson

#endif
