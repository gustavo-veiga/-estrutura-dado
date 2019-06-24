#ifndef LESSON_NODE_BINARY_H_
#define LESSON_NODE_BINARY_H_

namespace lesson {
namespace node {
template <typename T>
struct binary {
  T element;
  binary<T>* left;
  binary<T>* right;
  binary(T element);
  bool without_children();
};
}  // namespace node
}  // namespace lesson

#endif
