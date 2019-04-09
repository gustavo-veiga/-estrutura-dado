#include "vector.h"
#include <cstdlib>
#include <utility>

/*
 * Private Methods
 */

void lesson::vector::alloc(int size) {
  this->size = size;
  this->data = static_cast<int *>(std::malloc(this->size * sizeof(int)));
}

void lesson::vector::realloc(int size) {
  this->size = size;
  this->data = static_cast<int *>(std::realloc(this->data, this->size * sizeof(int)));
}

/*
 * Constructors
 */

lesson::vector::vector(int size) {
  this->alloc(size);
}

/*
 * Destructors
 */

lesson::vector::~vector() {
  std::free(this->data);
}

/*
 * Public Methods
 */

void lesson::vector::add(int element) {
  if (this->size == 0) {
    this->alloc(10);
  } else if (this->size == this->count) {
    this->realloc(this->size * 2);
  }
  this->data[this->count] = element;
  this->is_sorted = false;
  this->count++;
}

void lesson::vector::set(int index, int element) {
  if (index < this->count) {
    this->data[index] = element;
    this->is_sorted = false;
  }
}

int lesson::vector::get(int index) {
  if (index < this->count) {
    return this->data[index];
  }
  return NULL;
}

void lesson::vector::remove(int index) {
  if (index < this->count) {
    this->swap(index, this->end());
    this->data[this->end()] = NULL;
    this->is_sorted = false;
    this->count--;
  }
}

void lesson::vector::swap(int left, int right) {
  if (left < this->count && right < this->count) {
    std::swap(this->data[left], this->data[right]);
    this->is_sorted = false;
  }
}

int lesson::vector::end() {
  return this->count - 1;
}

int lesson::vector::capacity() {
  return this->size;
}
