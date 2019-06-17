#ifndef LESSON_LINKED_NODE_SIMPLE_H_
#define LESSON_LINKED_NODE_SIMPLE_H_

namespace lesson {
namespace linked {
namespace node {
template <typename T>
struct simple {
  T element;
  simple<T>* next;
  simple();
  simple(T element);
  simple(T element, simple<T>* next);
  ~simple();
};
}  // namespace node
}  // namespace linked
}  // namespace lesson

#endif
