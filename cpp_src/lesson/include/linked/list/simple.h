#ifndef LESSON_LINKED_SIMPLE_H_
#define LESSON_LINKED_SIMPLE_H_
#include <lesson/linked/node/simple.h>

namespace lesson {
namespace linked {
namespace list {
template <typename T>
class simple {
 private:
  lesson::linked::node::simple<T>* ptr_front;

 public:
  simple();
  ~simple();

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
}  // namespace list
}  // namespace linked
}  // namespace lesson

#endif
