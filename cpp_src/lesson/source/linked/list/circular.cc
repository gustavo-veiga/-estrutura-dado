#include <lesson/linked/list/circular.h>

namespace lesson {
namespace linked {
namespace list {
/*
 * Constructor
 */

template <typename T>
circular<T>::circular() {
  this->ptr_initial = nullptr;
}

/*
 * Destructors
 */

template <typename T>
circular<T>::~circular() {
}

/*
 * Public Methods
 */

// Element Access

// Modifiers

template <typename T>
void circular<T>::pop(T element) {
  if (this->empty()) {
    // Não tem nós
  }
}

template <typename T>
void circular<T>::push(T element) {
  if (this->empty()) {
    auto node_here = new node<T>;
    node_here->next = node_here;
    node_here->prev = node_here;
    node_here->element = element;
    this->ptr_initial = node_here;
  } else if (this->has_one_element()) {
    auto node_here = new node<T>;
    node_here->element = element;
    node_here->next = this->ptr_initial;
    node_here->prev = this->ptr_initial;
    this->ptr_initial->next = node_here;
  } else {
    auto node_here = new node<T>;
    node_here->element = element;
    node_here->prev = this->ptr_initial;
    node_here->next = this->ptr_initial->next;
    this->ptr_initial->next->prev = node_here;
    this->ptr_initial->next = node_here;
  }
}

// Capacity

template <typename T>
bool circular<T>::empty() {
  return this->ptr_initial == nullptr;
}

template <typename T>
bool circular<T>::has_one_element() {
  return this->ptr_initial == this->ptr_initial->next;
}
}  // namespace list
}  // namespace linked
}  // namespace lesson
