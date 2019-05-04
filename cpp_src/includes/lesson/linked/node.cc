#include "node.h"

namespace lesson {
namespace linked {
/*
 * Constructors
 */

template <typename T>
node<T>::node(T value) {
  value_type = value;
  next_node = nullptr;
}

template <typename T>
node<T>::node(T value, node<T>* next) {
  value_type = value;
  next_node = next;
}

/*
 * Public Methods
 */

template <typename T>
bool node<T>::operator<(node<T>* node) {
  return value() < node->value();
}

template <typename T>
bool node<T>::operator>(node<T>* node) {
  return value() > node->value();
}

template <typename T>
bool node<T>::operator==(node<T>* node) {
  return value() == node->value();
}

template <typename T>
T node<T>::value() {
  return value_type;
}

template <typename T>
node<T>* node<T>::next() {
  return next_node;
}

template <typename T>
void node<T>::set_node(node<T>* node) {
  next_node = node;
}
}  // namespace linked
}  // namespace lesson

template class lesson::linked::node<int>;
