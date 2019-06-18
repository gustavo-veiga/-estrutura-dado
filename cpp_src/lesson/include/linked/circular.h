#ifndef LESSON_LINKED_CIRCULAR_H_
#define LESSON_LINKED_CIRCULAR_H_

namespace lesson {
namespace linked {
template <typename T>
class circular {
 private:
  template <typename N>
  struct node {
    N element;
    node<N>* next;
    node<N>* prev;
  };
  node<T>* ptr_initial;

 public:
  circular();
  ~circular();

  // Element Access

  // Modifiers
  void pop(T element);
  void push(T element);

  // Capacity
  bool empty();
  bool has_one_element();
};
}  // namespace linked
}  // namespace lesson

#endif
