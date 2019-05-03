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
  this->size_value = size;
  this->data = static_cast<T *>(std::malloc(this->size_value * sizeof(T)));
}

template <typename T>
void vector<T>::realloc(size_t size) {
  this->size_value = size;
  this->data = static_cast<T *>(std::realloc(this->data, this->size_value * sizeof(T)));
}

/*
 * Constructors
 */

template <typename T>
vector<T>::vector() {
  this->alloc(10);
}

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

// Element Access

template <typename T>
T &vector<T>::operator[](size_t index) {
  return this->data[index];
}

// Modifiers

template <typename T>
void vector<T>::push(T element) {
  if (this->size_value == 0) {
    this->alloc(10);
  } else if (this->size_value == this->count_value) {
    this->realloc(this->size_value * 2);
  }
  this->data[this->count_value] = element;
  this->is_sorted = false;
  this->count_value++;
}

template <typename T>
void vector<T>::swap(size_t left, size_t right) {
  if (left < this->count_value && right < this->count_value) {
    std::swap(this->data[left], this->data[right]);
    this->is_sorted = false;
  }
}

template <typename T>
void vector<T>::remove(size_t index) {
  if (index < this->count_value) {
    this->swap(index, this->end());
    this->data[this->end()] = NULL;
    this->is_sorted = false;
    this->count_value--;
  }
}

// Capacity

template <typename T>
size_t vector<T>::end() {
  return this->count_value - 1;
}

template <typename T>
size_t vector<T>::size() {
  return this->count_value;
}

template <typename T>
size_t vector<T>::capacity() {
  return this->size_value;
}
}  // namespace array
}  // namespace lesson

template class lesson::array::vector<int>;