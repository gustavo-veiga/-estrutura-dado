#include "stack.h"
#include <cstdlib>
#include <stdexcept>

/*
 * Private Methods
 */

void lesson::stack::alloc(int size) {
  this->size = size;
  this->data = static_cast<int *>(std::malloc(this->size * sizeof(int)));
}

void lesson::stack::realloc(int size) {
  this->size = size;
  this->data = static_cast<int *>(std::realloc(this->data, this->size * sizeof(int)));
}

/*
 * Constructor
 */

lesson::stack::stack(int size) {
  this->topo = -1;
  this->size = size;
  this->alloc(this->size);
}

/*
 * Destructor
 */

lesson::stack::~stack() {
  std::free(this->data);
}

/*
 * Public Methods
 */

void lesson::stack::push(int e) {
  if (this->is_full()) {
    this->realloc(this->size * 2);
  }
  this->topo++;
  this->data[topo] = e;
}

int lesson::stack::pop() {
  if (this->is_empty()) {
    throw std::runtime_error("Empty Stack");
  }
  int e = this->data[this->topo];
  this->topo--;
  return e;
}

bool lesson::stack::is_empty() {
  return (topo == -1);
}

bool lesson::stack::is_full() {
  return (topo == this->size - 1);
}

int lesson::stack::top() {
  if (this->is_empty()) {
    throw std::runtime_error("Empty Stack");
  }
  return this->data[this->topo];
}
