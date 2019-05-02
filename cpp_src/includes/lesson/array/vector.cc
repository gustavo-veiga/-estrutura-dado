#include "vector.h"
#include <cstdlib>
#include <utility>

namespace lesson {
namespace array {
/*
 * Private Methods
 */

void vector::alloc(int size) {
  this->size = size;
  this->data = static_cast<int *>(std::malloc(this->size * sizeof(int)));
}

void vector::realloc(int size) {
  this->size = size;
  this->data = static_cast<int *>(std::realloc(this->data, this->size * sizeof(int)));
}

/*
 * Constructors
 */

vector::vector(int size) {
  this->alloc(size);
}

/*
 * Destructors
 */

vector::~vector() {
  std::free(this->data);
}

/*
 * Public Methods
 */

void vector::add(int element) {
  if (this->size == 0) {
    this->alloc(10);
  } else if (this->size == this->count) {
    this->realloc(this->size * 2);
  }
  this->data[this->count] = element;
  this->is_sorted = false;
  this->count++;
}

void vector::set(int index, int element) {
  if (index < this->count) {
    this->data[index] = element;
    this->is_sorted = false;
  }
}

int vector::get(int index) {
  if (index < this->count) {
    return this->data[index];
  }
  return NULL;
}

void vector::remove(int index) {
  if (index < this->count) {
    this->swap(index, this->end());
    this->data[this->end()] = NULL;
    this->is_sorted = false;
    this->count--;
  }
}

void vector::swap(int left, int right) {
  if (left < this->count && right < this->count) {
    std::swap(this->data[left], this->data[right]);
    this->is_sorted = false;
  }
}

int vector::end() {
  return this->count - 1;
}

int vector::capacity() {
  return this->size;
}
}  // namespace array
}  // namespace lesson
