#include <lesson/linked/node/simple.h>

namespace lesson {
namespace linked {
namespace node {
template <typename T>
simple<T>::simple() {
}

template <typename T>
simple<T>::simple(T element) {
  this->element = element;
  this->next = nullptr;
}

template <typename T>
simple<T>::simple(T element, simple<T>* next) {
  this->element = element;
  this->next = next;
}
}  // namespace node
}  // namespace linked
}  // namespace lesson
