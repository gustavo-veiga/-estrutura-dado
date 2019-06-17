#ifndef LESSON_LINKED_NODE_DOUBLE_H_
#define LESSON_LINKED_NODE_DOUBLE_H_

namespace lesson {
namespace linked {
namespace node {
template <typename T>
struct pair {
  T element;
  node<T>* next;
  node<T>* prev;
};
}  // namespace node
}  // namespace linked
}  // namespace lesson

#endif
