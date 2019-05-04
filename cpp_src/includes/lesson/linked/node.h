#ifndef LINKED_NODE_H
#define LINKED_NODE_H

namespace lesson {
namespace linked {
template <typename T>
struct node {
  T element;
  node<T>* next;
  node(T element);
  node(T element, node<T>* next);
};
}  // namespace linked
}  // namespace lesson

#endif
