#ifndef LESSON_NODE_SINGLE_H_
#define LESSON_NODE_SINGLE_H_

namespace lesson {
namespace node {
template <typename T>
struct single {
  T element;
  single<T>* next;
  single();
  single(T element);
  single(T element, single<T>* next);
  ~single();
};
}  // namespace node
}  // namespace lesson

#endif
