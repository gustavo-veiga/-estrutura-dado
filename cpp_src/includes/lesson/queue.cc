#include "queue.h"
#include <cstdlib>

/*
 * Constructors
 */

lesson::queue::queue(int size) {
  this->first = 0;
  this->last = 0;
  this->total = 0;
  this->size = size;
  this->data = static_cast<int *>(std::malloc(this->size * sizeof(int)));
}

/*
 * Destructors
 */

lesson::queue::~queue() {
  std::free(this->data);
}

/*
 * Public Methods
 */

void lesson::queue::insert(int element) {
  if (this->is_full()) {
    // TODO runtime error
  }
  this->data[this->last] = element;
  this->last = (this->last + 1) % this->size;
  this->total++;
}

int lesson::queue::remove() {
  if (this->is_empty()) {
    // TODO runtime error
  }
  int element = this->data[this->first];
  this->first = (this->first + 1) % this->size;
  this->total--;
  return element;
}

bool lesson::queue::is_empty() {
  return this->total == 0;
}

bool lesson::queue::is_full() {
  return this->total == this->size;
}
