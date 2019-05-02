#include "stack.h"
#include <cstdlib>
#include <stdexcept>

namespace lesson {
namespace array {
/*
 * Private Methods
 */

void stack::alloc(int size) {
  size_type = size;
  data = static_cast<int *>(std::malloc(size_type * sizeof(int)));
}

void stack::realloc(int size) {
  size_type = size;
  data = static_cast<int *>(std::realloc(data, size_type * sizeof(int)));
}

/*
 * Constructor
 */

stack::stack(int size) {
  top_type = -1;
  size_type = size;
  alloc(size_type);
}

/*
 * Destructor
 */

stack::~stack() {
  std::free(data);
}

/*
 * Public Methods
 */

// Element Access

int stack::top() {
  if (empty()) {
    throw std::runtime_error("Pilha Vazia");
  }
  return data[top_type];
}

// Modifiers

int stack::pop() {
  if (empty()) {
    throw std::runtime_error("Pilha Vazia");
  }
  int element = data[top_type];
  top_type--;
  return element;
}

void stack::push(int element) {
  if (full()) {
    realloc(size_type * 2);
  }
  top_type++;
  data[top_type] = element;
}

void stack::swap(int left, int right) {
  std::swap(data[left], data[right]);
}

// Capacity

int stack::size() {
  return size_type;
}

bool stack::full() {
  return (top_type == size_type - 1);
}

bool stack::empty() {
  return (top_type == -1);
}

// Unary Operations

void stack::dec2() {
  int top = pop();
  top -= 2;
  push(top);
}

void stack::add3() {
  int top = pop();
  top += 3;
  push(top);
}

// Binary Operations

void stack::add() {
  if (top_type < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = pop();
  int y = pop();
  push(x + y);
}

void stack::sub() {
  if (top_type < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = pop();
  int y = pop();
  push(x - y);
}

void stack::mpy() {
  if (top_type < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = pop();
  int y = pop();
  push(x * y);
}

void stack::div() {
  if (top_type < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = pop();
  int y = pop();
  push(x / y);
}
}  // namespace array
}  // namespace lesson
