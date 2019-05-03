#include "stack.h"
#include <cstdlib>
#include <stdexcept>

namespace lesson {
namespace array {
/*
 * Private Methods
 */

template <typename T>
void stack<T>::alloc(size_t size) {
  this->size_value = size;
  this->data = static_cast<T *>(std::malloc(this->size_value * sizeof(T)));
}

template <typename T>
void stack<T>::realloc(size_t size) {
  this->size_value = size;
  this->data = static_cast<T *>(std::realloc(this->data, this->size_value * sizeof(T)));
}

/*
 * Constructor
 */

template <typename T>
stack<T>::stack(size_t size) {
  this->top_value = -1;
  this->size_value = size;
  alloc(this->size_value);
}

/*
 * Destructor
 */

template <typename T>
stack<T>::~stack() {
  std::free(this->data);
}

/*
 * Public Methods
 */

// Element Access

template <typename T>
T stack<T>::top() {
  if (this->empty()) {
    throw std::runtime_error("Pilha Vazia");
  }
  return this->data[this->top_value];
}

// Modifiers

template <typename T>
T stack<T>::pop() {
  if (this->empty()) {
    throw std::runtime_error("Pilha Vazia");
  }
  T element = this->data[this->top_value];
  this->top_value--;
  return element;
}

template <typename T>
void stack<T>::push(T element) {
  if (this->full()) {
    this->realloc(this->size_value * 2);
  }
  this->top_value++;
  this->data[this->top_value] = element;
}

template <typename T>
void stack<T>::swap(size_t left, size_t right) {
  std::swap(this->data[left], this->data[right]);
}

// Capacity

template <typename T>
bool stack<T>::full() {
  return (this->top_value == this->size_value - 1);
}

template <typename T>
bool stack<T>::empty() {
  return (this->top_value == -1);
}

template <typename T>
size_t stack<T>::size() {
  return this->size_value;
}

// Unary Operations

template <typename T>
void stack<T>::dec2() {
  int top = pop();
  top -= 2;
  push(top);
}

template <typename T>
void stack<T>::add3() {
  int top = pop();
  top += 3;
  push(top);
}

// Binary Operations

template <typename T>
void stack<T>::add() {
  if (this->top() < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = this->pop();
  int y = this->pop();
  this->push(x + y);
}

template <typename T>
void stack<T>::sub() {
  if (this->top() < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = this->pop();
  int y = this->pop();
  this->push(x - y);
}

template <typename T>
void stack<T>::mpy() {
  if (this->top() < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = this->pop();
  int y = this->pop();
  this->push(x * y);
}

template <typename T>
void stack<T>::div() {
  if (this->top() < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = this->pop();
  int y = this->pop();
  this->push(x / y);
}
}  // namespace array
}  // namespace lesson

template class lesson::array::stack<int>;
