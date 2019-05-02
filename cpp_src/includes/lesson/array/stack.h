#ifndef STACK_H_
#define STACK_H_

namespace lesson {
namespace array {
class stack {
 private:
  int top_type;
  int size_type;
  int* data;
  void alloc(int size);
  void realloc(int size);

 public:
  stack(int size);
  ~stack();

  // Element Access
  int top();

  // Modifiers
  int pop();
  void push(int element);
  void swap(int left, int right);

  // Capacity
  int size();
  bool full();
  bool empty();

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
