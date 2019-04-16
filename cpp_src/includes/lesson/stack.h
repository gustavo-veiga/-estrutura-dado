#ifndef STACK_H_
#define STACK_H_

namespace lesson {
class stack {
 private:
  int topo;
  int size;
  int* data;
  void alloc(int size);
  void realloc(int size);
 public:
  stack(int size);
  ~stack();
  int top();
  int pop();
  void push(int e);
  bool is_empty();
  bool is_full();
};
}  // namespace lesson

#endif
