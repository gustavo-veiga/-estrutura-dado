#include "queue.h"
#include <cstdlib>
#include <stdexcept>

namespace lesson {
namespace array {
/*
 * Constructor
 */

queue::queue(int size) {
  first_type = 0;
  last_type = 0;
  total_type = 0;
  size_type = size;
  data = static_cast<int *>(std::malloc(size_type * sizeof(int)));
}

/*
 * Destructor
 */

queue::~queue() {
  std::free(data);
}

/*
 * Public Methods
 */

// Element Access

int queue::back() {
  return data[last_type];
}

int queue::front() {
  return data[first_type];
}

// Modifiers

int queue::pop() {
  if (empty()) {
    throw std::runtime_error("Fila Vazia");
  }
  int element = data[first_type];
  first_type = (first_type + 1) % size_type;
  total_type--;
  return element;
}

void queue::push(int element) {
  if (full()) {
    throw std::runtime_error("Fila Cheia");
  }
  data[last_type] = element;
  last_type = (last_type + 1) % size_type;
  total_type++;
}

void queue::swap(int left, int right) {
  if (left < size_type && right < size_type) {
    std::swap(data[left], data[right]);
  }
}

// Capacity

int queue::size() {
  return size_type;
}

bool queue::full() {
  return total_type == size_type;
}

bool queue::empty() {
  return total_type == 0;
}
}  // namespace array
}  // namespace lesson
