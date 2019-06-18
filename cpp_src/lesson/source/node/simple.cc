#include <lesson/node/single.h>

namespace lesson {
namespace node {
template <typename T>
single<T>::single() {
}

template <typename T>
single<T>::single(T element) {
  this->element = element;
  this->next = nullptr;
}

template <typename T>
single<T>::single(T element, single<T>* next) {
  this->element = element;
  this->next = next;
}
}  // namespace node
}  // namespace lesson
