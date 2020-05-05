#ifndef LESSON_LINKED_LIST_H_
#define LESSON_LINKED_LIST_H_
#include <lesson/node/single.h>

namespace lesson {
namespace linked {
template <typename T>
class list {
 private:
  lesson::node::single<T>* ptr_front;

 public:
  list();
  ~list();

  // Element Access
  T front();
  void show();

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
