#include "vector.h"
#include <cstdlib>
#include <utility>

namespace lesson {
namespace array {
/*
 * Private Methods
 */

template <typename T>
void vector<T>::alloc(size_t size) {
  this->size = size;
  this->data = static_cast<T *>(std::malloc(this->size * sizeof(T)));
}

template <typename T>
void vector<T>::realloc(size_t size) {
  this->size = size;
  this->data = static_cast<T *>(std::realloc(this->data, this->size * sizeof(T)));
}

/*
 * Constructors
 */

template <typename T>
vector<T>::vector(size_t size) {
  this->alloc(size);
}

/*
 * Destructors
 */

template <typename T>
vector<T>::~vector() {
  std::free(this->data);
}

/*
 * Public Methods
 */

template <typename T>
void vector<T>::add(T element) {
  if (this->size == 0) {
    this->alloc(10);
  } else if (this->size == this->count) {
    this->realloc(this->size * 2);
  }
  this->data[this->count] = element;
  this->is_sorted = false;
  this->count++;
}

template <typename T>
void vector<T>::set(size_t index, T element) {
  if (index < this->count) {
    this->data[index] = element;
    this->is_sorted = false;
  }
}

template <typename T>
T vector<T>::get(size_t index) {
  if (index < this->count) {
    return this->data[index];
  }
  return NULL;
}

template <typename T>
void vector<T>::remove(size_t index) {
  if (index < this->count) {
    this->swap(index, this->end());
    this->data[this->end()] = NULL;
    this->is_sorted = false;
    this->count--;
  }
}

template <typename T>
void vector<T>::swap(size_t left, size_t right) {
  if (left < this->count && right < this->count) {
    std::swap(this->data[left], this->data[right]);
    this->is_sorted = false;
  }
}

template <typename T>
size_t vector<T>::end() {
  return this->count - 1;
}

template <typename T>
size_t vector<T>::capacity() {
  return this->size;
}
}  // namespace array
}  // namespace lesson

template class lesson::array::vector<int>;