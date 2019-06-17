#include <lesson/array/queue.h>
#include <cstdlib>
#include <stdexcept>

namespace lesson {
namespace array {
/*
 * Constructor
 */

template <typename T>
queue<T>::queue(size_t size) {
  this->first_value = 0;
  this->last_value = 0;
  this->total_value = 0;
  this->size_value = size;
  this->data = static_cast<T *>(std::malloc(this->size_value * sizeof(T)));
}

/*
 * Destructor
 */

template <typename T>
queue<T>::~queue() {
  std::free(this->data);
}

/*
 * Public Methods
 */

// Element Access

template <typename T>
T queue<T>::back() {
  return this->data[this->last_value];
}

template <typename T>
T queue<T>::front() {
  return this->data[this->first_value];
}

// Modifiers

template <typename T>
T queue<T>::pop() {
  if (empty()) {
    throw std::runtime_error("Fila Vazia");
  }
  int element = this->data[this->first_value];
  this->first_value = (this->first_value + 1) % this->size_value;
  this->total_value--;
  return element;
}

template <typename T>
void queue<T>::push(T element) {
  if (full()) {
    throw std::runtime_error("Fila Cheia");
  }
  this->data[this->last_value] = element;
  this->last_value = (this->last_value + 1) % this->size_value;
  this->total_value++;
}

template <typename T>
void queue<T>::swap(size_t left, size_t right) {
  if (left < this->size_value && right < this->size_value) {
    std::swap(this->data[left], this->data[right]);
  }
}

// Capacity

template <typename T>
bool queue<T>::full() {
  return this->total_value == this->size_value;
}

template <typename T>
bool queue<T>::empty() {
  return this->total_value == 0;
}

template <typename T>
size_t queue<T>::size() {
  return this->size_value;
}
}  // namespace array
}  // namespace lesson

template class lesson::array::queue<int>;
