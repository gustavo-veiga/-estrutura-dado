#ifndef LINKED_LIST_H
#define LINKED_LIST_H
#include "node.h"
#include <cstdlib>

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
  node<T>* push_front(T element);
  node<T>* push_back(T element);

  // Capacity
  bool empty();
  size_t size();
};
}  // namespace linked
}  // namespace lesson

#endif