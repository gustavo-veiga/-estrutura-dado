#include <lesson/node/binary.h>

namespace lesson {
namespace node {
template <typename T>
binary<T>::binary(T element) {
  this->element = element;
  this->left = nullptr;
  this->right = nullptr;
}

template <typename T>
bool binary<T>::without_children() {
  return this->left == nullptr && this->right == nullptr;
}
}  // namespace node
}  // namespace lesson
