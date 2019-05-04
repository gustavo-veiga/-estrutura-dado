#include "node.h"

namespace lesson {
namespace linked {
/*
 * Constructors
 */

template <typename T>
node<T>::node(T element) {
  this->element = element;
  this->next = nullptr;
}

template <typename T>
node<T>::node(T element, node<T>* next) {
  this->element = element;
  this->next = next;
}
}  // namespace linked
}  // namespace lesson

template class lesson::linked::node<int>;
