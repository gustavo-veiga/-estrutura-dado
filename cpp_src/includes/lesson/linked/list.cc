#include "list.h"
#include <iostream>
#include <stdexcept>

namespace lesson {
namespace linked {
/*
 * Constructor
 */

template <typename T>
list<T>::list() {
  this->size_value = 0;
  this->ptr_front = nullptr;
}

/*
 * Public Methods
 */

// Element Access

template <typename T>
T list<T>::front() {
  return this->ptr_front->value();
}

template <typename T>
void list<T>::show() {
  auto aux = this->ptr_front;
  while (aux != nullptr) {
    std::cout << aux->value() << std::endl;
    aux = aux->next();
  }
}

template <typename T>
node<T>* list<T>::search(T element) {
  auto aux = this->ptr_front;
  while (aux != nullptr) {
    if (aux->value() == element) {
      return aux;
    }
    aux = aux->next();
  }
  return nullptr;
}

// Modifiers

template <typename T>
void list<T>::pop(T element) {
  auto aux = this->ptr_front;
  while (aux != nullptr) {
    if (aux->next()->value() == element) {
      auto to_remove = aux->next();
      aux->set_node(aux->next()->next());
      std::free(to_remove);
      break;
    }
    aux = aux->next();
  }
}

template <typename T>
node<T>* list<T>::push_front(T element) {
  if (this->empty()) {
    this->ptr_front = new node<T>(element);
  } else {
    auto node_here = new node<T>(element, this->ptr_front);
    this->ptr_front = node_here;
  }
  this->size_value++;
  return this->ptr_front;
}

template <typename T>
node<T>* list<T>::push_back(T element) {
  if (this->empty()) {
    this->ptr_front = new node<T>(element);
  } else {
    auto aux = this->ptr_front;
    while (aux != nullptr) {
      if (aux->next() == nullptr) {
        auto node_here = new node<T>(element);
        aux->set_node(node_here);
        this->size_value++;
        return node_here;
      }
      aux = aux->next();
    }
    return nullptr;
  }
}

// Capacity

template <typename T>
bool list<T>::empty() {
  return this->ptr_front == nullptr;
}

template <typename T>
size_t list<T>::size() {
  return this->size_value;
}
}  // namespace linked
}  // namespace lesson

template class lesson::linked::list<int>;
