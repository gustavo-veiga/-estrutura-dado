#ifndef LINKED_NODE_H
#define LINKED_NODE_H

namespace lesson {
namespace linked {
template <typename T>
class node {
 private:
  T value_type;
  node<T>* next_node;

 public:
  node(T value);
  node(T value, node<T>* next);

  bool operator<(node<T>* node);
  bool operator>(node<T>* node);
  bool operator==(node<T>* node);

  T value();
  node<T>* next();
  void set_node(node<T>* node);
};
}  // namespace linked
}  // namespace lesson

#endif
