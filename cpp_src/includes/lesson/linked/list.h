#ifndef LINKED_LIST_H
#define LINKED_LIST_H
#include <cstdlib>
#include "node.h"

namespace lesson {
namespace linked {
template <typename T>
class list {
 private:
  node<T>* ptr_front;
  size_t size_value;

 public:
  list();
  ~list();

  // Element Access
  T front();
  void show();
  node<T>* search(T element);

  // Modifiers
  void pop(T value);
  void push_front(T element);
  void push_back(T element);

  // Capacity
  bool empty();
};
}  // namespace linked
}  // namespace lesson

#endif
