#include "stack.h"
#include <cstdlib>
#include <stdexcept>

/*
 * Private Methods
 */

void lesson::stack::alloc(int size) {
  size_type = size;
  data = static_cast<int *>(std::malloc(size_type * sizeof(int)));
}

void lesson::stack::realloc(int size) {
  size_type = size;
  data = static_cast<int *>(std::realloc(data, size_type * sizeof(int)));
}

/*
 * Constructor
 */

lesson::stack::stack(int size) {
  top_type = -1;
  size_type = size;
  alloc(size_type);
}

/*
 * Destructor
 */

lesson::stack::~stack() {
  std::free(data);
}

/*
 * Public Methods
 */

// Element Access

int lesson::stack::top() {
  if (empty()) {
    throw std::runtime_error("Pilha Vazia");
  }
  return data[top_type];
}

// Modifiers

int lesson::stack::pop() {
  if (empty()) {
    throw std::runtime_error("Pilha Vazia");
  }
  int element = data[top_type];
  top_type--;
  return element;
}

void lesson::stack::push(int element) {
  if (full()) {
    realloc(size_type * 2);
  }
  top_type++;
  data[top_type] = element;
}

void lesson::stack::swap(int left, int right) {
  std::swap(data[left], data[right]);
}

// Capacity

int lesson::stack::size() {
  return size_type;
}

bool lesson::stack::full() {
  return (top_type == size_type - 1);
}

bool lesson::stack::empty() {
  return (top_type == -1);
}

// Unary Operations

void lesson::stack::dec2() {
  int top = pop();
  top -= 2;
  push(top);
}

void lesson::stack::add3() {
  int top = pop();
  top += 3;
  push(top);
}

// Binary Operations

void lesson::stack::add() {
  if (top_type < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = pop();
  int y = pop();
  push(x + y);
}

void lesson::stack::sub() {
  if (top_type < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = pop();
  int y = pop();
  push(x - y);
}

void lesson::stack::mpy() {
  if (top_type < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = pop();
  int y = pop();
  push(x * y);
}

void lesson::stack::div() {
  if (top_type < 2) {
    throw std::runtime_error(
        "Necessario no minino 2 elementos na pilha para executar essa operacao");
  }
  int x = pop();
  int y = pop();
  push(x / y);
}
