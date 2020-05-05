#ifndef LESSON_NODE_DUAL_H_
#define LESSON_NODE_DUAL_H_

namespace lesson {
namespace node {
template <typename T>
struct dual {
  T element;
  dual<T>* next;
  dual<T>* prev;
  dual();
  dual(T element);
  dual(T element, dual<T>* next);
  dual(T element, dual<T>* next, dual<T>* prev);
  ~dual();
};
}  // namespace node
}  // namespace lesson

#endif
