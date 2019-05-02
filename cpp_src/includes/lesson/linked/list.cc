#include "list.h"

namespace lesson {
namespace linked {
/*
 * Constructor
 */

template <typename T>
list<T>::list() {
  count = 0;
  pt_begin = nullptr;
}

/*
 * Public Methods
 */

// Iterators

template <typename T>
typename list<T>::iterator list<T>::begin() noexcept {
  node_iterator = pt_begin;
  return pt_begin;
}

template <typename T>
typename list<T>::iterator list<T>::end() noexcept {
  return nullptr;
}

// Operators

template <typename T>
list<T>& list<T>::operator++(const list<T>&) const {
  // TODO
}

template <typename T>
bool list<T>::is_empty() {
  return pt_begin == nullptr;
}

template <typename T>
void list<T>::insert_begin(T value) {
  if (is_empty()) {
    pt_begin = new node<T>(value);
  } else {
    auto node_here = new node<T>(value, pt_begin);
    pt_begin = node_here;
  }
}

template <typename T>
void list<T>::insert_end(T value) {
  if (is_empty()) {
    pt_begin = new node<T>(value);
  } else {
    // TODO Add node to end list
  }
}

template <typename T>
void list<T>::remove_node(T value) {
  // TODO Remove Item Node
}
}  // namespace linked
}  // namespace lesson
