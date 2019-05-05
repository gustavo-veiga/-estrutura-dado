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
 * Destructors
 */

template <typename T>
list<T>::~list() {
  auto aux = this->ptr_front;
  while (aux != nullptr) {
    auto to_remove = aux;
    aux = aux->next;
    delete to_remove;
  }
}

/*
 * Public Methods
 */

// Element Access

template <typename T>
T list<T>::front() {
  return this->ptr_front->element;
}

template <typename T>
void list<T>::show() {
  auto aux = this->ptr_front;
  while (aux != nullptr) {
    std::cout << aux->element << std::endl;
    aux = aux->next;
  }
}

template <typename T>
node<T>* list<T>::search(T element) {
  auto aux = this->ptr_front;
  while (aux != nullptr) {
    if (aux->element == element) {
      return aux;
    }
    aux = aux->next;
  }
  return nullptr;
}

// Modifiers

template <typename T>
void list<T>::pop(T element) {
  if (this->empty()) {
    // Lista está vazia
  } else if (this->ptr_front->next == nullptr) {
    // Só tem um nó
    if (this->ptr_front->element == element) {
      delete this->ptr_front;
      this->ptr_front = nullptr;
      this->size_value--;
    }
  } else if (this->ptr_front->element == element) {
    // É o primero nó
    auto to_remove = this->ptr_front;
    this->ptr_front = this->ptr_front->next;
    delete to_remove;
    this->size_value--;
  } else {
    // Procedimento normal
    auto aux = this->ptr_front;
    while (aux != nullptr) {
      if (aux->next->element == element) {
        auto to_remove = aux->next;
        aux->next = aux->next->next;
        delete to_remove;
        this->size_value--;
        break;
      }
      aux = aux->next;
    }
  }
}

template <typename T>
void list<T>::push_front(T element) {
  if (this->empty()) {
    this->ptr_front = new node<T>(element);
  } else {
    auto node_here = new node<T>(element, this->ptr_front);
    this->ptr_front = node_here;
  }
  this->size_value++;
}

template <typename T>
void list<T>::push_back(T element) {
  if (this->empty()) {
    this->ptr_front = new node<T>(element);
  } else {
    auto aux = this->ptr_front;
    while (aux != nullptr) {
      if (aux->next == nullptr) {
        auto node_here = new node<T>(element);
        aux->next = node_here;
        this->size_value++;
        break;
      }
      aux = aux->next;
    }
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
